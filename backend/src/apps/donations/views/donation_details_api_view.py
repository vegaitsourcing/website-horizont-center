from django.http.response import JsonResponse
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView

from apps.donations.models import Donation
from apps.donations.serializers.donation_serializer import DonationSerializer


class DonationDetailsAPIView(APIView):
    def get(self, request, pk: int) -> JsonResponse:
        donation = get_object_or_404(Donation, id=pk)
        serializer = DonationSerializer(donation)
        return JsonResponse(data=serializer.data, safe=False)
