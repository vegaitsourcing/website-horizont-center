from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.models import User, CaregiverProfile
from apps.users.serializers import CaregiverUserSerializer


class RegisterCaregiverAPIView(APIView):

    def post(self, request, **kwargs) -> JsonResponse:
        caregiver_serializer = CaregiverUserSerializer(data=request.data)
        if caregiver_serializer.is_valid():
            caregiver_profile_kwargs = caregiver_serializer.validated_data.pop('caregiver_profile')
            user = User.objects.create_user(**caregiver_serializer.validated_data)
            CaregiverProfile.objects.create(user=user, **caregiver_profile_kwargs)
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': caregiver_serializer.errors}, status=BAD_REQUEST)
