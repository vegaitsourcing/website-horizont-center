from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from caregivers.models import BaseModel


class DonationCompany(BaseModel):
    class Meta:
        verbose_name = _('Donation company')
        verbose_name_plural = _('Donation companies')

    name = models.CharField(
        verbose_name=_('name'),
        max_length=250
    )
    image = models.ImageField(
        upload_to='images/donations/companies',
        null=True,
        blank=True,
        verbose_name=_('company image'),
    )
    description = models.TextField(
        validators=[
            MinLengthValidator(limit_value=100)
        ],
        verbose_name=_('description'),
    )
    facebook_url = models.URLField(
        verbose_name=_('facebook'),
    )
    instagram_url = models.URLField(
        verbose_name=_('instagram'),
    )
    donation = models.ForeignKey(
        to='donations.Donation',
        verbose_name=_('donation'),
        on_delete=models.CASCADE,
    )
