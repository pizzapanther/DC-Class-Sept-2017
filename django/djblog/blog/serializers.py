from rest_framework import serializers

from blog.models import Post

class OldPostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ('title', 'slug', 'body', 'created')
    
class PostSerializer(serializers.ModelSerializer):
  author_id = serializers.IntegerField(required=True)
  blog_id = serializers.IntegerField(required=True)
  
  class Meta:
    model = Post
    fields = ('title', 'slug', 'body', 'created',
              'blog_id', 'author_id')
              
  def create(self, validated_data):
    print(validated_data)
    return Post.objects.create(**validated_data)
    