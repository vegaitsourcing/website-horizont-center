from django_filters import CharFilter, BooleanFilter
from django_filters.rest_framework import FilterSet


class AbstractProfileFilterSet(FilterSet):
    gender = CharFilter(field_name='gender')
    city = CharFilter(field_name='city')
    is_active = BooleanFilter(field_name='user__is_active')

    class Meta:
        fields = [
            'gender',
            'city',
        ]
