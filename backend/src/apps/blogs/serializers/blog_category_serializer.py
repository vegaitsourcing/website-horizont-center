from rest_framework import serializers

from apps.blogs.models.blog_category import BlogCategory


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = '__all__'
