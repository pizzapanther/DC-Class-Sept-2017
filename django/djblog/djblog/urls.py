"""djblog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from djzen.urls import zen_url

from graphene_django.views import GraphQLView
from blog.schema import read_schema, write_schema, \
                        PrivateGraphQLView
from django.views.decorators.csrf import csrf_exempt

import blog.views

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
urlpatterns = [
    zen_url('post/add', blog.views.add_post),
    zen_url('posts/<slug>', blog.views.post_list),
    
    zen_url('graphql', csrf_exempt(
        GraphQLView.as_view(graphiql=True, schema=read_schema)
      )
    ),
    zen_url('graphql-authed', csrf_exempt(
        PrivateGraphQLView.as_view(graphiql=True, schema=write_schema)
      )
    ),
    
    zen_url('api-token-auth/', obtain_jwt_token),
    zen_url('accounts/', include('django.contrib.auth.urls')),
    zen_url('admin/', admin.site.urls),
    zen_url('api-auth/', include(
                  'rest_framework.urls', namespace='rest_framework')),
]
