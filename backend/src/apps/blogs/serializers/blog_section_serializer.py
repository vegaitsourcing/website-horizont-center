from rest_framework import serializers

from apps.blogs.models.blog_section import BlogSection


class BlogSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogSection
        fields = '__all__'
