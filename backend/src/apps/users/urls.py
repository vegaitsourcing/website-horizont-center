from apps.users import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.users.viewsets import CaregiverProfileViewSet, BeneficiaryProfileViewSet

router = DefaultRouter()
router.register(r'caregivers', CaregiverProfileViewSet, basename='caregivers')
router.register(r'beneficiaries', BeneficiaryProfileViewSet, basename='beneficiaries')

api_url_patterns = [
    path(r'', include(router.urls)),
    path('register-caregiver/', views.RegisterCaregiverAPIView.as_view(), name='register_caregiver'),
    path('register-beneficiary/', views.RegisterBeneficiaryAPIView.as_view(), name='register_beneficiary'),
    path('register/<str:url_hash>/', views.CompleteRegistrationAPIView.as_view(), name='complete_registration'),
    path('login/', views.LoginAPIView.as_view(), name='login'),
]
