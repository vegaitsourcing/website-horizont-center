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

    def get_image_fields(self) -> tuple:
        image_fields = super(AbstractProfileSerializer, self).get_image_fields()
        image_fields += ('profile_image',)
        return image_fields
