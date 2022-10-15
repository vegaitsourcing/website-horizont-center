from django.urls import path
from apps.blogs.views import BlogAPIView

BASE_BLOGS_PATH = 'blogs/'
api_urlpatterns = [
    path(f'{BASE_BLOGS_PATH}', BlogAPIView.get, name='blog_list'),
    path(f'{BASE_BLOGS_PATH}<int:pk>', BlogAPIView.get_by_id, name='blog_details')
]
