from django.conf import settings
from django.template.loader import get_template
from django.utils.html import strip_tags

from apps.common.utils import EmailThread


class IdentityVerificationEmailThread(EmailThread):
    def __init__(self, token: str, email: str) -> None:
        template = get_template('emails/identity_verification.html')

        context = {
            'website_url': settings.FE_APP_ORIGIN,
            'verification_url': f'http://{settings.ALLOWED_HOST}:{settings.DJANGO_PORT}/api/v1/register/{token}',
            'logo_url': f'{settings.ALLOWED_HOST}/static/logo.png'
        }
        html_template = template.render(context)

        plain_message = strip_tags(html_template)

        super().__init__(
            subject='Verify your email',
            plain_message=plain_message,
            email_from=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            html_message=html_template
        )
