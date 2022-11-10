from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from apps.blogs.admin.blog_author_admin_inline import BlogAuthorAdminInline
from apps.blogs.admin.blog_section_admin_inline import BlogSectionAdminInline
from apps.blogs.models.blog import Blog
from apps.common.admin import ModelAdminMixin


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin, ModelAdminMixin):
    search_fields = (
        'title',
        'description',
        'author__first_name',
        'author__last_name',
    )
    list_display = (
        'title',
        'author_name',
    )
    inlines = [
        BlogAuthorAdminInline,
        BlogSectionAdminInline,
    ]
    filter_horizontal = (
        'categories',
    )

    def author_name(self, obj: Blog = None) -> str:
        return obj.author if obj and obj.has_author else '-'

    author_name.short_description = _('author')
