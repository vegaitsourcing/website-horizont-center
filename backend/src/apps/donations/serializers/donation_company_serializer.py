from apps.donations.models import DonationCompany
from apps.common.serializers import ModelSerializer


class DonationCompanySerializer(ModelSerializer):
    class Meta:
        model = DonationCompany
        fields = '__all__'

    def get_image_fields(self) -> tuple:
        image_fields = super(DonationCompanySerializer, self).get_image_fields()
        image_fields += ('image',)
        return image_fields
