from rest_framework import serializers

from apps.donations.models import Donation
from apps.donations.serializers import DonationCompanySerializer
from apps.donations.serializers.financial_info_serializer import FinancialInfoSerializer
from caregivers.serializers import BaseModelSerializer


class DonationSerializer(BaseModelSerializer):
    financial_info = FinancialInfoSerializer()
    company = serializers.SerializerMethodField('get_company_serializer')

    def get_company_serializer(self, obj: Donation) -> dict:
        serializer = DonationCompanySerializer(instance=obj.company, request=self.request)
        return serializer.data

    class Meta:
        model = Donation
        fields = '__all__'

    def get_image_field_names(self) -> tuple:
        image_field_names = super(DonationSerializer, self).get_image_field_names()
        image_field_names += ('image',)
        return image_field_names
