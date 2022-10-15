from django.http.response import JsonResponse
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from apps.blogs.models import Blog
from apps.blogs.serializers.blog_serializer import BlogSerializer


class BlogAPIView(APIView):
    @staticmethod
    def get(request) -> JsonResponse:
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return JsonResponse(data=serializer.data, safe=False)

    @staticmethod
    def get_by_id(request, pk: int) -> JsonResponse:
        blog = get_object_or_404(Blog, id=pk)
        serializer = BlogSerializer(blog)
        return JsonResponse(data=serializer.data, safe=False)
