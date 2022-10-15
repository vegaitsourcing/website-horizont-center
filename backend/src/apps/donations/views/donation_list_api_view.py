
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import get_object_or_404, ListAPIView
from rest_framework.pagination import LimitOffsetPagination

from apps.donations.models import Donation
from apps.donations.serializers.donation_serializer import DonationSerializer
from apps.donations.filter import DonationFilter


class DonationListAPIView(ListAPIView):
    filter_backends = [DjangoFilterBackend]
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    search_field = ['^title']
    filterset_class = DonationFilter
    pagination_class = LimitOffsetPagination


