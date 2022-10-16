from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.users.authentication import TokenAuthentication


class LogoutAPIView(APIView):
    authentication_classes = [TokenAuthentication]

    @staticmethod
    def post(request, **kwargs) -> Response:
        Token.objects.get(user_id=request.user.pk).delete()
        return Response(data={'message': 'success'})
