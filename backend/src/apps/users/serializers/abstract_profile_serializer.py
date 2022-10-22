from drf_extra_fields.fields import Base64ImageField
from apps.users.models import AbstractProfile
from apps.users.serializers import UserSerializer
from apps.common.serializers import BaseModelSerializer


class AbstractProfileSerializer(BaseModelSerializer):
    profile_image = Base64ImageField()
    user = UserSerializer()

    class Meta:
        model = AbstractProfile
        fields = (
            'id',
            'profile_image',
            'gender',
            'postal_code',
            'city',
            'description',
            'user',
        )

    def get_image_field_names(self) -> tuple:
        image_field_names = super(AbstractProfileSerializer, self).get_image_field_names()
        image_field_names += ('profile_image',)
        return image_field_names
