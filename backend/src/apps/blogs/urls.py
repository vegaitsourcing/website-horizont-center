from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.blogs.viewsets import BlogViewSet

router = DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blogs')

api_urlpatterns = [
    path(r'', include(router.urls)),
]
