from django.http.response import JsonResponse
from rest_framework.views import APIView
from apps.users.models import User
from rest_framework.generics import get_object_or_404

from caregivers.utils.verification_token import VerificationToken


class RegisterAPIView(APIView):

    def get(self, request, url_hash: str) -> JsonResponse:
        email = VerificationToken.get_email_from_hash(url_hash)
        user = get_object_or_404(User, email=email)
        user.is_active = True
        user.update()
        return JsonResponse(data={'message': 'success'})

