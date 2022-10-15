from drf_extra_fields.fields import Base64ImageField
from rest_framework import serializers


class AbstractProfileSerializer(serializers.ModelSerializer):
    profile_image = Base64ImageField()

    class Meta:
        fields = (
            'id',
            'profile_image',
            # 'gender', # TODO
            # 'postal_code', # TODO
            'city',
            'description',
        )
