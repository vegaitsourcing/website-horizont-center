from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.serializers import CaregiverUserSerializer
from apps.users.utils import create_caregiver_user, send_verification_email


class RegisterCaregiverAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        caregiver_serializer = CaregiverUserSerializer(data=request.data)
        if caregiver_serializer.is_valid():
            user = create_caregiver_user(caregiver_serializer)
            send_verification_email(user)
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': caregiver_serializer.errors}, status=BAD_REQUEST)
