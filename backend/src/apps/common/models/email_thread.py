from threading import Thread
from django.conf import settings
from django.template.loader import get_template
from django.utils.html import strip_tags
from django.utils.translation import gettext_lazy as _
from django.core.mail import send_mail
from django.db import models

from apps.common.models import BaseModel


class EmailThread(BaseModel):
    class Meta:
        verbose_name = _('Email Thread')
        verbose_name_plural = _('Email Threads')

    email_from = settings.EMAIL_HOST_USER

    class Statuses(models.TextChoices):
        PENDING = 'pending', _('waiting to send email')
        SUCCESS = 'success', _('successfully sent email')
        FAILURE = 'failure', _('failed to send email')

    subject = models.CharField(
        verbose_name=_('subject'),
        max_length=250,
    )
    recipient_email = models.CharField(
        verbose_name=_('recipient email'),
        max_length=250,
    )
    email_context = models.JSONField(
        verbose_name=_('email context'),
        default=dict,
    )
    template_path = models.CharField(
        verbose_name=_('template path'),
        max_length=250,
    )
    status = models.CharField(
        verbose_name=_('status'),
        max_length=10,
        choices=Statuses.choices,
        default=Statuses.PENDING,
        help_text=_(
            'Note that the email can successfully be sent even '
            'if the recipient email address does not exist'
        )
    )

    def __str__(self):
        return f'{self.subject} | {self.recipient_email}'

    def start(self) -> None:
        Thread(target=self.send_email).start()

    def send_email(self) -> None:
        try:
            sent_email_count = self._do_send_email()
            self.update(status=self.Statuses.SUCCESS if sent_email_count else self.Statuses.FAILURE)
        except Exception:
            self.update(status=self.Statuses.FAILURE)

    def _do_send_email(self) -> int:
        html_message = self._render_html_message()
        return send_mail(
            subject=self.subject,
            message=strip_tags(html_message),
            from_email=self.email_from,
            recipient_list=[self.recipient_email],
            html_message=self._render_html_message(),
        )

    def _render_html_message(self) -> str:
        template = get_template(self.template_path)
        return template.render(self.email_context)
