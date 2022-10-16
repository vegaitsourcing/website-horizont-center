from apps.blogs.models import BlogAuthor
from caregivers.serializers import BaseModelSerializer


class BlogAuthorSerializer(BaseModelSerializer):
    class Meta:
        model = BlogAuthor
        fields = '__all__'
        image_fields = (
            'image',
        )
