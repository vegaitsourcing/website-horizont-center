from django.urls import path

from apps.donations.views import donations_view

BASE_DONATIONS_PATH = 'donations/'
api_urlpatterns = [
    path(f'{BASE_DONATIONS_PATH}', donations_view.DonationAPIView.get, name='donations_list'),
    path(f'{BASE_DONATIONS_PATH}<int:pk>', donations_view.DonationAPIView.get_by_id, name='donations_details'),
]
