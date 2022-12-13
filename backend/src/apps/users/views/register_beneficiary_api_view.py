from http.client import BAD_REQUEST, CREATED
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.serializers import BeneficiaryProfileSerializer
from apps.users.utils import create_beneficiary_user, send_identity_verification_email


class RegisterBeneficiaryAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        serializer = BeneficiaryProfileSerializer(data=request.data, request=request)
        if serializer.is_valid():
            password = request.data.get("user").pop("password", "")
            user = create_beneficiary_user(serializer=serializer, password=password)
            send_identity_verification_email(email=user.email, request=request)
            return JsonResponse(data={'message': 'success'}, status=CREATED)
        return JsonResponse(data={'errors': serializer.errors}, status=BAD_REQUEST)
