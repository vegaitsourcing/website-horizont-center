import threading
from threading import Thread
from abc import ABC
from typing import List
from django.core.mail import send_mail as core_send_email
import logging


class EmailThread(ABC, Thread):
    def __init__(
            self, subject: str, plain_message: str, email_from: str, recipient_list: List[str],
            html_message: str = None
    ) -> None:
        super().__init__()
        self.subject = subject
        self.plain_message = plain_message
        self.email_from = email_from
        self.recipient_list = recipient_list
        self.html_message = html_message
        threading.Thread.__init__(self)

    def run(self) -> None:
        try:
            core_send_email(
                subject=self.subject,
                message=self.plain_message,
                from_email=self.email_from,
                recipient_list=self.recipient_list,
                html_message=self.html_message,
            )
        except Exception:
            logger = logging.getLogger(__name__)
            logger.error("Failed to send email")
