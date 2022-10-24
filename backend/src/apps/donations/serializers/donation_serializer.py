from rest_framework import serializers

from apps.donations.models import Donation
from apps.donations.serializers import DonationCompanySerializer
from apps.donations.serializers.financial_info_serializer import FinancialInfoSerializer
from apps.common.serializers import BaseModelSerializer


class DonationSerializer(BaseModelSerializer):
    financial_info = FinancialInfoSerializer()
    company = serializers.SerializerMethodField('get_company_serializer')

    def get_company_serializer(self, obj: Donation) -> dict:
        serializer = DonationCompanySerializer(instance=obj.company, request=self.request)
        return serializer.data

    class Meta:
        model = Donation
        fields = '__all__'

    def get_image_fields(self) -> tuple:
        image_fields = super(DonationSerializer, self).get_image_fields()
        image_fields += ('image',)
        return image_fields
