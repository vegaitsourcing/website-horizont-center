from drf_extra_fields.fields import Base64ImageField
from rest_framework import serializers

from apps.users.serializers import UserSerializer


class AbstractProfileSerializer(serializers.ModelSerializer):
    profile_image = Base64ImageField()
    user = UserSerializer()

    class Meta:
        fields = (
            'id',
            'profile_image',
            'gender',
            'postal_code',
            'city',
            'description',
            'user',
        )
