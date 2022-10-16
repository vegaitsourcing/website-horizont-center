from django.urls import path
from apps.users import views

api_url_patterns = [
    path('register-caregiver/', views.RegisterCaregiverAPIView.as_view(), name='register_caregiver'),
    path('register-beneficiary/', views.RegisterBeneficiaryAPIView.as_view(), name='register_beneficiary'),
    path('register/<str:url_hash>/', CompleteRegistrationAPIView.as_view(), name='complete_registration'),
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('caregivers/', views.CaregiverAPIView.as_view(), name='caregiver_list'),
    path('beneficiaries/', views.BeneficiaryAPIView.as_view(), name='beneficiary_list'),
]
