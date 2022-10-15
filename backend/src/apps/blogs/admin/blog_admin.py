from django.contrib import admin

from apps.blogs.admin.blog_author_admin_inline import BlogAuthorSectionAdmin
from apps.blogs.admin.blog_section_admin_inline import BlogSectionAdmin
from apps.blogs.models.blog import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'image',
    )
    inlines = [
        BlogAuthorSectionAdmin,
        BlogSectionAdmin
    ]
    search_fields = (
        'title',
    )

    ordering = ('title',)
