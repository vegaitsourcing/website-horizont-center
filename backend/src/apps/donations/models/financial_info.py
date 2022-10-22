from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import BaseModel


class FinancialInfo(BaseModel):
    class Meta:
        verbose_name = _('Financial Info')
        verbose_name_plural = _('Financial Info')

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
    payment_bank_account = models.CharField(
        verbose_name=_('payment bank account'),
        max_length=20
    )
    payment_model = models.IntegerField(
        verbose_name=_('payment model'),
        blank=True,
        null=True
    )
    payment_reference_number = models.CharField(
        verbose_name=_('payment reference number'),
        max_length=20,
        blank=True,
        null=True
    )
    donation = models.OneToOneField(
        to='donations.Donation',
        verbose_name=_('donation'),
        on_delete=models.CASCADE,
        related_name='financial_info'
    )

    def __str__(self):
        return f'{self._meta.verbose_name.title()} ' + _('for') + f' {self.donation}'
