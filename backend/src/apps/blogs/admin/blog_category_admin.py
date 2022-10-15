from django.contrib import admin
from apps.blogs.models.blog_category import BlogCategory


@admin.register(BlogCategory)
class BlogCategoryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'color',
    )
    search_fields = (
        'name',
        'color',
    )
    ordering = ('name',)
