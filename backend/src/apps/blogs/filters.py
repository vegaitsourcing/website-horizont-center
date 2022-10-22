from django_filters import CharFilter
from django_filters.rest_framework import FilterSet
from apps.blogs.models import Blog


class BlogFilterSet(FilterSet):
    contains = CharFilter(field_name='title', lookup_expr='icontains')
    category_name = CharFilter(field_name='categories__name')

    class Meta:
        model = Blog
        fields = [
            'title',
            'categories',
        ]
