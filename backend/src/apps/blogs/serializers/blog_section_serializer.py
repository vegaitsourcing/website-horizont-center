from rest_framework import serializers
from apps.blogs.models import BlogSection


class BlogSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogSection
        fields = '__all__'
