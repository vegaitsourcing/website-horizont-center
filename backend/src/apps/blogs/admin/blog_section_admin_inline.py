from django.contrib import admin
from apps.blogs.models.blog_section import BlogSection


class BlogSectionAdmin(admin.StackedInline):
    model = BlogSection
