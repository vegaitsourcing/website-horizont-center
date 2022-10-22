from django_filters import rest_framework as filters
from apps.users.filters import CaregiverProfileFilter
from apps.users.models import CaregiverProfile
from apps.users.serializers import CaregiverProfileSerializer
from apps.common.viewsets import ViewSet


class CaregiverProfileViewSet(ViewSet):
    model_class = CaregiverProfile
    serializer_class = CaregiverProfileSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CaregiverProfileFilter
