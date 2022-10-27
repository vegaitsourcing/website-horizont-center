from apps.common.serializers import ModelSerializer
from apps.blogs.models import BlogAuthor


class BlogAuthorSerializer(ModelSerializer):
    class Meta:
        model = BlogAuthor
        fields = '__all__'

    def get_image_fields(self) -> tuple:
        image_fields = super(BlogAuthorSerializer, self).get_image_fields()
        image_fields += ('image',)
        return image_fields
