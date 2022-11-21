from django.conf import settings
from django.core import signing
from django.core.handlers.wsgi import WSGIRequest
from django.template.loader import get_template
from django.utils.html import strip_tags
from django.utils.translation import gettext_lazy as _

from apps.common.threads import EmailThread
from apps.users.models import User


class PasswordForgottenEmailThread(EmailThread):

    def __init__(self, request: WSGIRequest, user: User) -> None:
        self.user = user
        self.request = request
        html_template = self._create_html_template()
        super().__init__(
            subject=_('Reset your password'),
            plain_message=strip_tags(html_template),
            email_from=settings.EMAIL_HOST_USER,
            recipient_list=[self.user.email],
            html_message=html_template
        )

    def _create_html_template(self) -> str:
        url_hash = signing.dumps({'email': self.user.email})
        context = {
            'password_reset_url': f'{settings.FE_APP_ORIGIN}/password-reset/{url_hash}/',
            'website_url': settings.FE_APP_ORIGIN,
        }
        template = get_template('emails/password_reset.html')
        return template.render(context)
