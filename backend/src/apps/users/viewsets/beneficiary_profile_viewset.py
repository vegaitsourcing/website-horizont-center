from django_filters import rest_framework as filters
from apps.users.filters import BeneficiaryProfileFilter
from apps.users.models import BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer
from apps.common.viewsets import ViewSet


class BeneficiaryProfileViewSet(ViewSet):
    model_class = BeneficiaryProfile
    serializer_class = BeneficiaryProfileSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BeneficiaryProfileFilter
