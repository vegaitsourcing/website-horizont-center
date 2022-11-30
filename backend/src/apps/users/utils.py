from django.core import signing
from django.utils.translation import gettext_lazy as _
from django.core.handlers.wsgi import WSGIRequest
from django.conf import settings
from apps.common.models import EmailThread
from apps.common.utils import get_request_base_url
from apps.users.models import User, CaregiverProfile, BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer, CaregiverProfileSerializer


def create_caregiver_user(serializer: CaregiverProfileSerializer, password: str) -> User:
    user_kwargs = serializer.validated_data.pop('user')
    user_kwargs['password'] = password
    user = User.objects.create_user(**user_kwargs)
    CaregiverProfile.objects.create(user=user, **serializer.validated_data)

    return user


def create_beneficiary_user(serializer: BeneficiaryProfileSerializer, password: str) -> User:
    user_kwargs = serializer.validated_data.pop('user')
    user_kwargs['password'] = password
    user = User.objects.create_user(**user_kwargs)
    BeneficiaryProfile.objects.create(user=user, **serializer.validated_data)

    return user


def get_email_from_hash(url_hash: str) -> str:
    decoded_key = signing.loads(url_hash)
    return decoded_key.get('email')


def send_identity_verification_email(email: str, request: WSGIRequest) -> None:
    url_hash = signing.dumps({'email': email})
    web_api_origin = get_request_base_url(request=request)
    email_context = {
        'website_url': settings.FE_APP_ORIGIN,
        'verification_url': f'{web_api_origin}/api/v1/complete-register/{url_hash}',
    }
    email_thread = EmailThread.objects.create(
        subject=_('Verify your email address'),
        recipient_email=email,
        email_context=email_context,
        template_path='emails/identity_verification.html',
        group='identity_verification'
    )
    email_thread.start()


def send_password_reset_email(email: str) -> None:
    url_hash = signing.dumps({'email': email})
    email_context = {
        'password_reset_url': f'{settings.FE_APP_ORIGIN}/password-reset/{url_hash}/',
        'website_url': settings.FE_APP_ORIGIN,
    }
    email_thread = EmailThread.objects.create(
        subject=_('Reset your password'),
        recipient_email=email,
        email_context=email_context,
        template_path='emails/password_reset.html',
        group='password_reset',
    )
    email_thread.start()
