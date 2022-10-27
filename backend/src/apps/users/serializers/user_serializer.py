from apps.common.serializers import ModelSerializer
from apps.users.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = (
            'password',
            'groups',
            'user_permissions',
        )

    def get_sensitive_fields(self) -> tuple:
        return (
            'email',
            'phone_number',
            'second_phone_number',
        )
