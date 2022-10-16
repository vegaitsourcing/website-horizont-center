from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.blogs.views import BlogCategoryAPIView
from apps.blogs.viewsets import BlogViewSet

router = DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blogs')

api_urlpatterns = [
    path(r'', include(router.urls)),
    path('blog-categories/', BlogCategoryAPIView.as_view(), name='blog_category_list'),
]
