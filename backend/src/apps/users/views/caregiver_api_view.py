from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.models import CaregiverProfile
from apps.users.serializers import CaregiverProfileSerializer


class CaregiverAPIView(APIView):

    @staticmethod
    def get(request) -> JsonResponse:
        caregiver_profiles = CaregiverProfile.objects.all()
        serializer = CaregiverProfileSerializer(caregiver_profiles, many=True)
        return JsonResponse(data=serializer.data, safe=False)
