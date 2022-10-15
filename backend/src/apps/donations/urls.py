from django.urls import path
from apps.donations.views import DonationAPIView

BASE_DONATIONS_PATH = 'donations/'
api_urlpatterns = [
    path(f'{BASE_DONATIONS_PATH}', DonationAPIView.get, name='donations_list'),
    path(f'{BASE_DONATIONS_PATH}<int:pk>', DonationAPIView.get_by_id, name='donations_details'),
]
