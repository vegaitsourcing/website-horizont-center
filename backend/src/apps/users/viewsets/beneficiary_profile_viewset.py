from apps.users.filters import BeneficiaryProfileFilterSet
from apps.users.models import BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer
from apps.users.viewsets import AbstractProfileViewSet


class BeneficiaryProfileViewSet(AbstractProfileViewSet):
    model_class = BeneficiaryProfile
    serializer_class = BeneficiaryProfileSerializer
    filterset_class = BeneficiaryProfileFilterSet
