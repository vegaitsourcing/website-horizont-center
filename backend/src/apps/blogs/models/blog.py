from caregivers.models import BaseModel
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
    blog_author = models.OneToOneField(
        to='blogs.BlogAuthor',
        verbose_name=_('blog author'),
        on_delete=models.CASCADE,
    )
    blog_category = models.ManyToManyField(
        to='blogs.BlogCategory',
        verbose_name=_('blog category'),
    )
    blog_section = models.ForeignKey(
        to='blogs.BlogSection',
        verbose_name=_('blog section'),
        on_delete=models.CASCADE,
    )

