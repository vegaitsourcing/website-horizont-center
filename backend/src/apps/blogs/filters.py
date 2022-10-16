from django_filters import CharFilter
from django_filters.rest_framework import FilterSet
from apps.blogs.models import Blog


class BlogFilter(FilterSet):
    contains = CharFilter(field_name='title', lookup_expr='icontains')

    class Meta:
        model = Blog
        fields = [
            'title',
        ]
