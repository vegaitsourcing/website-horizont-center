from apps.users.models.abstract_profile import AbstractProfile
from django.db import models
from django.utils.translation import gettext_lazy as _


class CaregiverProfile(AbstractProfile):
    class Meta:
        verbose_name = _('Caregiver Profile')
        verbose_name_plural = _('Caregiver Profiles')

    birthdate = models.DateField(
        verbose_name=_('birthdate')
    )
    work_application = models.CharField(
        verbose_name=_('work application'),
        max_length=250
    )
    experience = models.CharField(
        verbose_name=_('experience'),
        max_length=250,
        null=True,
        blank=True,
    )
    weekly_days = models.CharField(
        verbose_name=_('weekly days'),
        max_length=250,
    )
    daily_hours = models.FloatField(
        verbose_name=_('daily hours'),
        null=True,
        blank=True,
    )
    instagram_url = models.URLField(
        verbose_name=_('instagram url'),
        null=True,
        blank=True,
    )
    facebook_url = models.URLField(
        verbose_name=_('facebook url'),
        null=True,
        blank=True,
    )
