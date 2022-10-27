from rest_framework import serializers
from apps.blogs.models import Blog
from apps.blogs.serializers import BlogAuthorSerializer, BlogCategorySerializer, BlogSectionSerializer
from apps.common.serializers import ModelSerializer


class BlogSerializer(ModelSerializer):
    sections = BlogSectionSerializer(many=True)
    categories = BlogCategorySerializer(many=True)
    author = serializers.SerializerMethodField('get_author_serializer')

    class Meta:
        model = Blog
        fields = '__all__'

    def get_image_fields(self) -> tuple:
        image_fields = super(BlogSerializer, self).get_image_fields()
        image_fields += ('image',)
        return image_fields

    def get_author_serializer(self, obj: Blog) -> dict | None:
        if not obj.has_author:
            return None
        serializer = BlogAuthorSerializer(instance=obj.author, request=self.request)
        return serializer.data
