from apps.common.models import OrganizationPartner
from apps.common.serializers import ModelSerializer


class OrganizationPartnerSerializer(ModelSerializer):
    class Meta:
        model = OrganizationPartner
        fields = '__all__'

    def get_image_fields(self) -> tuple:
        image_fields = super(OrganizationPartnerSerializer, self).get_image_fields()
        image_fields += ('image',)
        return image_fields
