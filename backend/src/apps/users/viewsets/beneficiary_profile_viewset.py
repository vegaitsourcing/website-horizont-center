from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated
from apps.users.filters import BeneficiaryProfileFilterSet
from apps.users.models import BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer
from apps.common.viewsets import ViewSet


class BeneficiaryProfileViewSet(ViewSet):
    model_class = BeneficiaryProfile
    serializer_class = BeneficiaryProfileSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BeneficiaryProfileFilterSet
    method_specific_permission_classes = {
        'retrieve': [IsAuthenticated],
    }
