from django_filters import CharFilter

from apps.users.filters.abstract_profile_filter import AbstractProfileFilterSet
from apps.users.models import CaregiverProfile


class CaregiverProfileFilterSet(AbstractProfileFilterSet):
    contains = CharFilter(field_name='work_application', lookup_expr='icontains')

    class Meta:
        model = CaregiverProfile
        fields = AbstractProfileFilterSet.Meta.fields + [
            'work_application',
        ]
