from django.urls import path
from apps.donations.views.donation_api_view import DonationAPIView
from apps.donations.views.list_donation_api_view import ListDonationAPIView
BASE_DONATIONS_PATH = 'donations'
api_urlpatterns = [
    path(f'{BASE_DONATIONS_PATH}/', ListDonationAPIView.as_view(), name='donations_list'),
    path(f'{BASE_DONATIONS_PATH}/<int:pk>/', DonationAPIView.get_by_id, name='donations_details'),
]
