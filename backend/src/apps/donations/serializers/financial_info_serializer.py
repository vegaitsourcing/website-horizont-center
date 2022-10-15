from rest_framework import serializers

from apps.donations.models import FinancialInfo


class FinancialInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialInfo
        fields = '__all__'
