from django.http.response import JsonResponse
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from apps.users.models import BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer


class BeneficiaryDetailsAPIView(APIView):

    @staticmethod
    def get(request, pk: int) -> JsonResponse:
        beneficiary_profile = get_object_or_404(BeneficiaryProfile, id=pk)
        serializer = BeneficiaryProfileSerializer(beneficiary_profile)
        return JsonResponse(data=serializer.data)
