from django_filters import rest_framework as filters
from apps.donations.filters import DonationFilter
from apps.donations.models import Donation
from apps.donations.serializers import DonationSerializer
from apps.common.viewsets import ViewSet


class DonationViewSet(ViewSet):
    model_class = Donation
    serializer_class = DonationSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = DonationFilter
