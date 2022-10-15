from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from .donation import Donation


class FinancialDonation(Donation):
    class Meta:
        verbose_name = _('Donation company')
        verbose_name_plural = _('Donation companies')

    payment_purpose = models.CharField(
        verbose_name=_('payment purpose'),
        max_length=250
    )
    payment_receiver = models.CharField(
        verbose_name=_('payment receiver'),
        max_length=250
    )
    payment_code = models.IntegerField(
        verbose_name=_('payment code'),
    )
    payment_bank_account = models.IntegerField(
        verbose_name=_('payment bank_account'),
    )
    payment_model = models.IntegerField(
        verbose_name=_('payment model'),
    )
    payment_reference_model = models.IntegerField(
        verbose_name=_('payment reference model'),
    )

