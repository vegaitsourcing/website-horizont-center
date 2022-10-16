from rest_framework import serializers

from apps.blogs.models import Blog
from apps.blogs.serializers import BlogAuthorSerializer
from apps.blogs.serializers.blog_category_serializer import BlogCategorySerializer
from apps.blogs.serializers.blog_section_serializer import BlogSectionSerializer
from caregivers.serializers import BaseModelSerializer


class BlogSerializer(BaseModelSerializer):
    sections = BlogSectionSerializer(many=True)
    categories = BlogCategorySerializer(many=True)
    author = serializers.SerializerMethodField('get_author_serializer')

    class Meta:
        model = Blog
        fields = '__all__'
        image_fields = (
            'image',
        )

    def get_author_serializer(self, obj: Blog) -> dict:
        serializer = BlogAuthorSerializer(instance=obj.author, request=self.request)
        return serializer.data
