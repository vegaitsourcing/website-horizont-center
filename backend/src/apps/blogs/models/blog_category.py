from colorfield.fields import ColorField
from django.db import models
from django.utils.translation import gettext_lazy as _
from caregivers.models import BaseModel


class BlogCategory(BaseModel):
    class Meta:
        verbose_name = _('Blog Category')
        verbose_name_plural = _('Blog Categories')

    COLOR_PALETTE = [
        ('#F87024', _('orange'),),
        ('#0075FF', _('blue'),),
        ('#229EBD', _('light green-blue'),),
    ]

    name = models.CharField(
        verbose_name=_('category name'),
        max_length=100
    )
    color = ColorField(
        verbose_name=_('color'),
        samples=COLOR_PALETTE,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name
