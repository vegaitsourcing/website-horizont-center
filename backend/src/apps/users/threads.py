from django.conf import settings
from django.core import signing
from django.core.handlers.wsgi import WSGIRequest
from django.template.loader import get_template
from django.utils.html import strip_tags
from django.utils.translation import gettext_lazy as _
from apps.common.threads import EmailThread
from apps.common.utils import get_request_base_url


class IdentityVerificationEmailThread(EmailThread):

    def __init__(self, request: WSGIRequest, email: str) -> None:
        self.user_email = email
        self.request = request
        html_template = self._create_html_template()
        plain_message = strip_tags(html_template)
        subject = _('Verify your email')
        super().__init__(
            subject=subject,
            plain_message=plain_message,
            email_from=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            html_message=html_template
        )

    def _create_html_template(self) -> str:
        url_hash = signing.dumps({'email': self.user_email})
        web_api_origin = get_request_base_url(request=self.request)
        context = {
            'website_url': settings.FE_APP_ORIGIN,
            'verification_url': f'{web_api_origin}/api/v1/complete-register/{url_hash}',
        }
        template = get_template('emails/identity_verification.html')
        return template.render(context)
