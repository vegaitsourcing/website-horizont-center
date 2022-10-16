from django_filters import rest_framework as filters
from apps.blogs.filters import BlogFilter
from apps.blogs.models import Blog
from apps.blogs.serializers.blog_serializer import BlogSerializer
from caregivers.viewsets import ViewSet


class BlogViewSet(ViewSet):
    model_class = Blog
    serializer_class = BlogSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BlogFilter
