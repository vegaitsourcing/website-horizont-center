from django.contrib import admin
from apps.blogs.models.blog_section import BlogSection


class BlogSectionAdminInline(admin.StackedInline):
    model = BlogSection
    extra = 0
