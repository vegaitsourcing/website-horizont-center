from rest_framework import serializers

from apps.donations.models import Donation
from apps.donations.serializers.financial_donations_serializer import FinancialInfoSerializer


class DonationsSerializer(serializers.ModelSerializer):
    financial_info = FinancialInfoSerializer()

    class Meta:
        model = Donation
        fields = '__all__'
