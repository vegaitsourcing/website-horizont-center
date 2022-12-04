from django.urls import path, include
from rest_framework.routers import DefaultRouter

from apps.common.viewsets import OrganizationPartnerViewSet

router = DefaultRouter()
router.register(r'organization-partners', OrganizationPartnerViewSet, basename='organization-partners')

api_urlpatterns = [
    path(r'', include(router.urls)),
]
