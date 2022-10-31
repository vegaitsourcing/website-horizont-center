from django.http.response import HttpResponseRedirect
from django.conf import settings
from rest_framework.views import APIView
from apps.users.models import User
from rest_framework.generics import get_object_or_404
from apps.users.utils import get_email_from_hash


class CompleteRegistrationAPIView(APIView):

    @staticmethod
    def get(request, url_hash: str) -> HttpResponseRedirect:
        email = get_email_from_hash(url_hash=url_hash)
        user = get_object_or_404(User, email=email)
        user.update(is_active=True)
        return HttpResponseRedirect(redirect_to=f'{settings.FE_APP_ORIGIN}/login')
