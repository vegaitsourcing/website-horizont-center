from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.common.models import BaseModel


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
    image = models.ImageField(
        verbose_name=_('image'),
        upload_to='images/blogs/authors',
    )
    facebook_url = models.URLField(
        verbose_name=_('facebook URL'),
        null=True,
        blank=True,
    )
    instagram_url = models.URLField(
        verbose_name=_('instagram URL'),
        null=True,
        blank=True,
    )
    linkedin_url = models.URLField(
        verbose_name=_('linkedin URL'),
        null=True,
        blank=True,
    )
    twitter_url = models.URLField(
        verbose_name=_('twitter URL'),
        null=True,
        blank=True,
    )
    blog = models.OneToOneField(
        to='blogs.Blog',
        verbose_name=_('blog'),
        on_delete=models.CASCADE,
        related_name='author',
        null=True
    )

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
