from apps.blogs.models.blog_author import BlogAuthor
from django.contrib import admin


class BlogAuthorAdminInline(admin.StackedInline):
    model = BlogAuthor
    classes = ['collapse']
