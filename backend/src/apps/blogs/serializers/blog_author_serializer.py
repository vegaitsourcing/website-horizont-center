from apps.common.serializers import BaseModelSerializer
from apps.blogs.models import BlogAuthor


class BlogAuthorSerializer(BaseModelSerializer):
    class Meta:
        model = BlogAuthor
        fields = '__all__'

    def get_image_field_names(self) -> tuple:
        image_field_names = super(BlogAuthorSerializer, self).get_image_field_names()
        image_field_names += ('image',)
        return image_field_names
