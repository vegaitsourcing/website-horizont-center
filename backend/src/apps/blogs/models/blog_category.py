from caregivers.models import BaseModel
from django.utils.translation import gettext_lazy as _
from django.db import models


class BlogCategory(BaseModel):
    class Meta:
        verbose_name = _('Blog Category')
        verbose_name_plural = _('Blog Categories')

    name = models.CharField(
        verbose_name=_('category name'),
        max_length=100
    )
    color = models.CharField(
        verbose_name=_('color'),
        max_length=100
    )
    blog = models.ManyToManyField(
        to='blogs.Blog',
        verbose_name=_('blog'),
    )

    def __str__(self):
        return self.name
