from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated
from apps.users.filters import CaregiverProfileFilterSet
from apps.users.models import CaregiverProfile
from apps.users.serializers import CaregiverProfileSerializer
from apps.common.viewsets import ViewSet


class CaregiverProfileViewSet(ViewSet):
    model_class = CaregiverProfile
    serializer_class = CaregiverProfileSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CaregiverProfileFilterSet
    method_specific_permission_classes = {
        'retrieve': [IsAuthenticated],
    }
