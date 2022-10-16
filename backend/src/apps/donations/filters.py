from django_filters import CharFilter
from django_filters.rest_framework import FilterSet
from apps.donations.models import Donation


class DonationFilter(FilterSet):
    contains = CharFilter(field_name='title', lookup_expr='icontains')

    class Meta:
        model = Donation
        fields = [
            'title',
        ]
