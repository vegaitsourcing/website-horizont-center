from django_filters import CharFilter

from apps.users.filters.abstract_profile_filter import AbstractProfileFilter
from apps.users.models import BeneficiaryProfile


class BeneficiaryProfileFilter(AbstractProfileFilter):
    contains = CharFilter(field_name='care_type', lookup_expr='icontains')

    class Meta:
        model = BeneficiaryProfile
        fields = AbstractProfileFilter.Meta.fields + [
            'care_type',
        ]
