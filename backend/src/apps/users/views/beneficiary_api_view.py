from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.models import BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer


class BeneficiaryAPIView(APIView):

    @staticmethod
    def get(request) -> JsonResponse:
        beneficiary_profiles = BeneficiaryProfile.objects.all()
        serializer = BeneficiaryProfileSerializer(beneficiary_profiles, many=True, )
        return JsonResponse(data=serializer.data, safe=False)
