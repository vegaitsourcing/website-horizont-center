
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import get_object_or_404, ListAPIView
from rest_framework.pagination import LimitOffsetPagination

from apps.donations.models import Donation
from apps.donations.serializers.donations_serializer import DonationsSerializer
from apps.donations.filter import DonationFilter


class ListDonationAPIView(ListAPIView):
    filter_backends = [DjangoFilterBackend]
    queryset = Donation.objects.all()
    serializer_class = DonationsSerializer
    search_field = ['^title']
    filterset_class = DonationFilter
    pagination_class = LimitOffsetPagination


