from apps.blogs.models.blog_author import BlogAuthor
from django.contrib import admin


class BlogAuthorSectionAdmin(admin.StackedInline):
    model = BlogAuthor