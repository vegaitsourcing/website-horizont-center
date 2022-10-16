from django.http.response import JsonResponse
from rest_framework.views import APIView
from apps.blogs.models.blog_category import BlogCategory
from apps.blogs.serializers.blog_category_serializer import BlogCategorySerializer


class BlogCategoryAPIView(APIView):

    @staticmethod
    def get(request) -> JsonResponse:
        blog_categories = BlogCategory.objects.all()
        serializer = BlogCategorySerializer(blog_categories, many=True)
        return JsonResponse(data=serializer.data, safe=False)
