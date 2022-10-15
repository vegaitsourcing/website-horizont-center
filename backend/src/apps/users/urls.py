from django.urls import path
from apps.users import views

api_url_patterns = [
    path('register-caregiver/', views.RegisterCaregiverAPIView.as_view(), name='register_caregiver'),
    path('register-beneficiary/', views.RegisterBeneficiaryAPIView.as_view(), name='register_beneficiary'),
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('caregivers/', views.CaregiverAPIView.as_view(), name='caregiver_list'),
    path('beneficiaries/', views.BeneficiaryAPIView.as_view(), name='beneficiary_list'),
]
