#!/usr/bin/env python
import os
import sys

import dotenv

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djblog.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        # The above import may fail for some other reason. Ensure that the
        # issue is really that Django is missing to avoid masking other
        # exceptions on Python 2.
        try:
            import django
        except ImportError:
            raise ImportError(
                "Couldn't import Django. Are you sure it's installed and "
                "available on your PYTHONPATH environment variable? Did you "
                "forget to activate a virtual environment?"
            )
        raise
        
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    dotenv_path = os.path.join(BASE_DIR, '.env')
    
    if os.path.exists(dotenv_path):
        dotenv.read_dotenv(dotenv_path)
        
    if 'devserver' in sys.argv or 'runserver' in sys.argv:
        os.environ.setdefault("ENVIRONMENT", "development")
        
    elif 'prodserver' in sys.argv or 'runuwsgi' in sys.argv:
        os.environ.setdefault("UWSGI_MODULE", "djblog.wsgi")
        os.environ.setdefault("ENVIRONMENT", "production")
        
    execute_from_command_line(sys.argv)
