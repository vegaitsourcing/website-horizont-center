from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.serializers import BeneficiaryUserSerializer
from apps.users.utils import create_beneficiary_user, send_verification_email


class RegisterBeneficiaryAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        beneficiary_serializer = BeneficiaryUserSerializer(data=request.data)
        if beneficiary_serializer.is_valid():
            user = create_beneficiary_user(beneficiary_serializer)
            send_verification_email(user)
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': beneficiary_serializer.errors}, status=BAD_REQUEST)
