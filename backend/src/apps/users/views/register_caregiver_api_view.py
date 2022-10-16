from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.serializers import CaregiverProfileSerializer
from apps.users.utils import create_caregiver_user, send_verification_email


class RegisterCaregiverAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        serializer = CaregiverProfileSerializer(data=request.data, request=request)
        if serializer.is_valid():
            user = create_caregiver_user(serializer)
            send_verification_email(user)
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': serializer.errors}, status=BAD_REQUEST)
