from django.urls import path
from apps.users import views

api_url_patterns = [
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('logout/', views.LogoutAPIView.as_view(), name='logout'),
    path('register-caregiver/', views.RegisterCaregiverAPIView.as_view(), name='register_caregiver'),
    path('register-beneficiary/', views.RegisterBeneficiaryAPIView.as_view(), name='register_beneficiary'),
    path('caregivers/', views.CaregiverListAPIView.as_view(), name='caregiver_list'),
    path('caregivers/<int:pk>/', views.CaregiverDetailsAPIView.as_view(), name='caregiver_details'),
    path('beneficiaries/', views.BeneficiaryListAPIView.as_view(), name='beneficiary_list'),
    path('beneficiaries/<int:pk>/', views.BeneficiaryDetailsAPIView.as_view(), name='beneficiary_details'),
]
