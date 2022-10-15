from django.http.response import JsonResponse
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from apps.donations.models import Donation
from apps.donations.serializers.donations_serializer import DonationsSerializer


class DonationAPIView(APIView):
    @staticmethod
    def get_by_id(request, pk: int) -> JsonResponse:
        donation = get_object_or_404(Donation, id=pk)
        serializer = DonationsSerializer(donation)
        return JsonResponse(data=serializer.data, safe=False)
