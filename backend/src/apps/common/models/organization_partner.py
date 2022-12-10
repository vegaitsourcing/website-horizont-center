from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.common.models import BaseModel


class OrganizationPartner(BaseModel):
    class Meta:
        verbose_name = _('Organization Partner')
        verbose_name_plural = _('Organization Partners')

    name = models.CharField(
        verbose_name=_('name'),
        max_length=250,
    )
    image = models.ImageField(
        verbose_name=_('logo image'),
        upload_to='images/common/organization_partner',
    )
    url = models.URLField(
        verbose_name=_('URL'),
    )

    def __str__(self):
        return self.name
