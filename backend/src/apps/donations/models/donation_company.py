from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import BaseModel


class DonationCompany(BaseModel):
    class Meta:
        verbose_name = _('Company')
        verbose_name_plural = _('Companies')

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
        blank=True,
        null=True
    )
    instagram_url = models.URLField(
        verbose_name=_('instagram'),
        blank=True,
        null=True
    )
    donation = models.OneToOneField(
        to='donations.Donation',
        verbose_name=_('donation'),
        on_delete=models.CASCADE,
        related_name='company',
    )
