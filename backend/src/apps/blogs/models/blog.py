from apps.common.models import BaseModel
from django.utils.translation import gettext_lazy as _
from django.db import models


class Blog(BaseModel):
    class Meta:
        verbose_name = _('Blog')
        verbose_name_plural = _('Blogs')

    title = models.CharField(
        verbose_name=_('title'),
        max_length=100
    )
    image = models.ImageField(
        verbose_name=_('image'),
        upload_to=_('images/blogs'),
        null=True,
        blank=True,
    )
    categories = models.ManyToManyField(
        to='blogs.BlogCategory',
        verbose_name=_('categories'),
        related_name='blogs'
    )

    def __str__(self):
        return self.title

    @property
    def has_author(self) -> bool:
        return bool(getattr(self, 'author', False))
