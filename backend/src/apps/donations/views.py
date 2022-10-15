from django.http import HttpRequest
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from apps.donations.models import Donation
from apps.donations.serializers.donations_serializer import DonationsSerializer
from caregivers.serializers.list_response_serializer import ListResponseSerializer


class DonationAPIView(APIView):
    @staticmethod
    @api_view(["GET"])
    def get(request: HttpRequest) -> JsonResponse:
        donations = Donation.objects.all()
        serializer = ListResponseSerializer(
            queryset=donations,
            model_serializer_class=DonationsSerializer,
            request=request,
        )
        return JsonResponse(data=serializer.data, safe=False)

    @staticmethod
    def get_by_id(request, pk: int) -> JsonResponse:
        donation = get_object_or_404(Donation, id=pk)
        serializer = DonationsSerializer(donation)
        return JsonResponse(data=serializer.data, safe=False)
