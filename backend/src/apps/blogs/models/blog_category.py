from caregivers.models import BaseModel
from django.utils.translation import gettext_lazy as _
from django.db import models


class BlogCategory(BaseModel):
    class Meta:
        verbose_name = _('Blog Category')
        verbose_name_plural = ('Blog Categories')

    name = models.CharField(
        verbose_name=_('name'),
        max_length=100
    )
    color = models.CharField(
        verbose_name=_('color'),
        max_length=100
    )
