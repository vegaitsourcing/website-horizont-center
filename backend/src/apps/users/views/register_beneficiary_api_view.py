from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.models import User, BeneficiaryProfile
from apps.users.serializers import BeneficiaryUserSerializer


class RegisterBeneficiaryAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        beneficiary_serializer = BeneficiaryUserSerializer(data=request.data)
        if beneficiary_serializer.is_valid():
            beneficiary_profile_kwargs = beneficiary_serializer.validated_data.pop('beneficiary_profile')
            user = User.objects.create_user(**beneficiary_serializer.validated_data)
            BeneficiaryProfile.objects.create(user=user, **beneficiary_profile_kwargs)
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': beneficiary_serializer.errors}, status=BAD_REQUEST)
