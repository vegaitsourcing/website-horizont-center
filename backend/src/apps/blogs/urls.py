from django.urls import path

from apps.blogs.views import BlogAPIView

urlpatterns = [
    path('', BlogAPIView.get),
    path('<int:pk>', BlogAPIView.get_by_id)
]
