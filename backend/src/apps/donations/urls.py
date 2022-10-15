from django.urls import path
from apps.donations.views.donation_details_api_view import DonationDetailsAPIView
from apps.donations.views.donation_list_api_view import DonationListAPIView
BASE_DONATIONS_PATH = 'donations'
api_urlpatterns = [
    path(f'{BASE_DONATIONS_PATH}/', DonationListAPIView.as_view(), name='donations_list'),
    path(f'{BASE_DONATIONS_PATH}/<int:pk>/', DonationDetailsAPIView.as_view(), name='donations_details'),
]
