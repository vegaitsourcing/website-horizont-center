from django_filters import CharFilter
from django_filters.rest_framework import FilterSet


class AbstractProfileFilterSet(FilterSet):
    gender = CharFilter(field_name='gender')
    city = CharFilter(field_name='city')

    class Meta:
        fields = [
            'gender',
            'city',
        ]
