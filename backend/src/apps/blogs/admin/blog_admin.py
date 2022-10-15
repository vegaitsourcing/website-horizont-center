from django.contrib import admin

from apps.blogs.admin.blog_author_admin_inline import BlogAuthorAdminInline
from apps.blogs.admin.blog_section_admin_inline import BlogSectionAdminInline
from apps.blogs.models.blog import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'image',
    )
    inlines = [
        BlogAuthorAdminInline,
        BlogSectionAdminInline
    ]
    search_fields = (
        'title',
    )
    fields = (
        'title',
        'image',
        'categories'
    )
    ordering = ('title',)
    filter_horizontal = (
        'categories',
    )
