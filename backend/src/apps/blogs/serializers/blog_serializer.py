from rest_framework import serializers
from apps.blogs.models.blog import Blog
from apps.blogs.serializers.blog_section_serializer import BlogSectionSerializer
from apps.blogs.serializers.blog_category_serializer import BlogCategorySerializer


class BlogSerializer(serializers.ModelSerializer):
    sections = BlogSectionSerializer(many=True)
    categories = BlogCategorySerializer(many=True)

    class Meta:
        model = Blog
        fields = '__all__'
