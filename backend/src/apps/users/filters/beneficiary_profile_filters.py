from django_filters import CharFilter

from apps.users.filters.abstract_profile_filter import AbstractProfileFilterSet
from apps.users.models import BeneficiaryProfile


class BeneficiaryProfileFilterSet(AbstractProfileFilterSet):
    contains = CharFilter(field_name='care_type', lookup_expr='icontains')

    class Meta:
        model = BeneficiaryProfile
        fields = AbstractProfileFilterSet.Meta.fields + [
            'care_type',
        ]
