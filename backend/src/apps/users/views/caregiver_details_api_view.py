from django.http.response import JsonResponse
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from apps.users.models import CaregiverProfile
from apps.users.serializers import CaregiverProfileSerializer


class CaregiverDetailsAPIView(APIView):

    @staticmethod
    def get(request, pk: int) -> JsonResponse:
        caregiver_profile = get_object_or_404(CaregiverProfile, id=pk)
        serializer = CaregiverProfileSerializer(caregiver_profile)
        return JsonResponse(data=serializer.data)
