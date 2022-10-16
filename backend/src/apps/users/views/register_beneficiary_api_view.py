from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.serializers import BeneficiaryProfileSerializer
from apps.users.utils import create_beneficiary_user, send_verification_email


class RegisterBeneficiaryAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        serializer = BeneficiaryProfileSerializer(data=request.data, request=request)
        if serializer.is_valid():
            user = create_beneficiary_user(serializer)
            send_verification_email(user)
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': serializer.errors}, status=BAD_REQUEST)
