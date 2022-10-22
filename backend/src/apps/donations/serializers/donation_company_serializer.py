from apps.donations.models import DonationCompany
from apps.common.serializers import BaseModelSerializer


class DonationCompanySerializer(BaseModelSerializer):
    class Meta:
        model = DonationCompany
        fields = '__all__'

    def get_image_field_names(self) -> tuple:
        image_field_names = super(DonationCompanySerializer, self).get_image_field_names()
        image_field_names += ('image',)
        return image_field_names
