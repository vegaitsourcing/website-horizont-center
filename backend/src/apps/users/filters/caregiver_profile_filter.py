from django_filters import CharFilter

from apps.users.filters.abstract_profile_filter import AbstractProfileFilter
from apps.users.models import CaregiverProfile


class CaregiverProfileFilter(AbstractProfileFilter):
    contains = CharFilter(field_name='work_application', lookup_expr='icontains')

    class Meta:
        model = CaregiverProfile
        fields = AbstractProfileFilter.Meta.fields + [
            'work_application',
        ]
