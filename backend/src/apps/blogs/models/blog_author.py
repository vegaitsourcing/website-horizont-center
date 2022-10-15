from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinLengthValidator
from caregivers.models import BaseModel


class BlogAuthor(BaseModel):
    class Meta:
        verbose_name = _('Blog Author')
        verbose_name_plural = _('Blog Authors')

    first_name = models.CharField(
        verbose_name=_('first name'),
        max_length=20
    )
    last_name = models.CharField(
        verbose_name=_('last name'),
        max_length=20
    )
    description = models.TextField(
        verbose_name=_('description'),
        validators=[
            MinLengthValidator(limit_value=100)
        ],
    )
    facebook_url = models.URLField(
        verbose_name=_('facebook url'),
    )
    image = models.ImageField(
        verbose_name=_('image'),
        upload_to=_('image/blogAuthors'),
    )
    instagram_url = models.URLField(
        verbose_name=_('instagram url'),
    )
