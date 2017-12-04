
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from blog.models import Post
from blog.serializers import PostSerializer

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def post_list (request, slug):
  posts = Post.objects.filter(blog__slug=slug)
  serializer = PostSerializer(posts, many=True)
  return Response(serializer.data)
  
# def post_detail (request, id):

@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def add_post (request):
  serializer = PostSerializer(data=request.data)
  
  if serializer.is_valid(raise_exception=True):
    serializer.save()
    return Response(serializer.data)
    