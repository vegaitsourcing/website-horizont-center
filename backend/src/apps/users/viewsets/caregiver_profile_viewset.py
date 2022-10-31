from apps.users.filters import CaregiverProfileFilterSet
from apps.users.models import CaregiverProfile
from apps.users.serializers import CaregiverProfileSerializer
from apps.users.viewsets import AbstractProfileViewSet


class CaregiverProfileViewSet(AbstractProfileViewSet):
    model_class = CaregiverProfile
    serializer_class = CaregiverProfileSerializer
    filterset_class = CaregiverProfileFilterSet
