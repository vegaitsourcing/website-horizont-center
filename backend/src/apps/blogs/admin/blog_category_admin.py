from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from apps.blogs.models.blog_category import BlogCategory
from apps.common.admin import ModelAdminMixin


@admin.register(BlogCategory)
class BlogCategoryAdmin(admin.ModelAdmin, ModelAdminMixin):
    search_fields = (
        'name',
        'color',
    )
    list_display = (
        'name',
        'color_display',
    )

    def color_display(self, obj: BlogCategory = None) -> str:
        style = {
            'background-color': obj.color,
            'width': '40px',
            'height': '15px',
        }
        style_str = ' '.join([f'{key}: {value};' for key, value in style.items()])
        return mark_safe(f'<div style="{style_str}"></div>')

    color_display.short_description = _('color')
