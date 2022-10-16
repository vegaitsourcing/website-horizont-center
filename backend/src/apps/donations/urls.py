from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.donations.viewsets import DonationViewSet

router = DefaultRouter()
router.register(r'donations', DonationViewSet, basename='donations')

api_urlpatterns = [
    path(r'', include(router.urls)),
]
