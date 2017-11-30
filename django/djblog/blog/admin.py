from django.contrib import admin
from blog.models import Publication, Post

@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
  list_display = ('name', 'slug')

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ('title', 'slug', 'created', 'blog')
  list_filter = ('created',)
  search_fields = ('title', 'slug', 'body')