from apps.common.fields import Base64ImageField
from apps.users.models import AbstractProfile
from apps.users.serializers import UserSerializer
from apps.common.serializers import ModelSerializer


class AbstractProfileSerializer(ModelSerializer):
    image = Base64ImageField()
    user = UserSerializer()

    class Meta:
        model = AbstractProfile
        fields = (
            'id',
            'type',
            'image',
            'gender',
            'postal_code',
            'city',
            'description',
            'user',
            'created',
            'modified',
        )

    def get_image_fields(self) -> tuple:
        image_fields = super(AbstractProfileSerializer, self).get_image_fields()
        image_fields += ('image',)
        return image_fields
