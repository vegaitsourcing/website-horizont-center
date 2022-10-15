from django.urls import path

from apps.donations.views import donations_view

urlpatterns = [
    path('', donations_view.DonationAPIView.get),
    path('<int:pk>', donations_view.DonationAPIView.get_by_id),
]
