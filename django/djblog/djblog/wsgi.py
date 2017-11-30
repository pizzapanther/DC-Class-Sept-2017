"""
WSGI config for djblog project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

import dotenv

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

dotenv_path = os.path.join(BASE_DIR, '.env')

if os.path.exists(dotenv_path):
    dotenv.read_dotenv(dotenv_path)
    
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djblog.settings")

application = get_wsgi_application()
