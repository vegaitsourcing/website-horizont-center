import os

from caregivers.settings.common import EMAIL_HOST_USER
# from django.template.loader import render_to_string
# from django.template import Context, Template
# from django.utils.html import strip_tags
from caregivers.utils.email_notification import EmailNotification


class SendVerificationTokenEmailNotification(EmailNotification):
    def __init__(self, token: str, email: str) -> None:
        # template = Template(template_string)
        #
        # context = Context({'challenge_id': challenge_id,
        #                   'first_name': first_name, 'token': token})
        #
        # html_template = template.render(context)
        #
        # plain_message = strip_tags(html_template)

        super().__init__('Verify your email',
                         f'Please click on this link to verify your email: {os.getenv("CORS_ALLOWED_ORIGIN")}/api/v1/{token}'
                         , EMAIL_HOST_USER, [email])
