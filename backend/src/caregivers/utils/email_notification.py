from abc import ABC
from typing import List
from django.core.mail import send_mail as core_send_email
import logging

logger = logging.getLogger(__name__)


class EmailNotification(ABC):
    def __init__(self, subject: str, plain_message: str, email_from: str, recipient_list: List[str]) -> None:
        super().__init__()
        self.subject = subject
        self.plain_message = plain_message
        self.email_from = email_from
        self.recipient_list = recipient_list
        # self.html_message = html_message

    def try_to_send_email(self) -> bool:
        try:
            self._send_email()
            return True
        except Exception as exception:
            logger.error("Failed to send email")
            return False

    def _send_email(self) -> None:
        core_send_email(self.subject, self.plain_message, self.email_from,
                        self.recipient_list)
