from http.client import BAD_REQUEST

from django.http import JsonResponse
from django.utils import timezone
from rest_framework.views import APIView

from apps.users.serializers import PasswordForgottenSerializer
from apps.users.threads import PasswordForgottenEmailThread


class PasswordForgottenAPIView(APIView):

    @staticmethod
    def post(request, **kwargs) -> JsonResponse:
        serializer = PasswordForgottenSerializer(data=request.data, request=request)
        if serializer.is_valid():
            PasswordForgottenEmailThread(request=request, user=serializer.user).start()
            serializer.user.update(requested_password_reset_at=timezone.now())
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': serializer.errors}, status=BAD_REQUEST)
