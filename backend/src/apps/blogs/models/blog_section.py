from apps.common.models import BaseModel
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinLengthValidator
from django.db import models


class BlogSection(BaseModel):
    class Meta:
        verbose_name = _('Blog Section')
        verbose_name_plural = _('Blog Sections')

    class MediaType(models.TextChoices):
        FACEBOOK = 'image', _('image'),
        INSTAGRAM = 'video', _('video'),

    title = models.CharField(
        verbose_name=_('title'),
        max_length=100,
    )
    description = models.TextField(
        verbose_name=_('description'),
        validators=[
            MinLengthValidator(limit_value=100)
        ],
        blank=True,
        null=True,
    )
    media_url = models.URLField(
        verbose_name=_('media url'),
        blank=True,
        null=True,
    )
    media_type = models.CharField(
        max_length=100,
        choices=MediaType.choices,
        verbose_name=_('media type'),
    )
    blog = models.ForeignKey(
        to='blogs.Blog',
        verbose_name=_('blog'),
        related_name='sections',
        on_delete=models.CASCADE,
        null=True
    )
