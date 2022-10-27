from apps.common.serializers import ModelSerializer
from apps.users.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'password', 'last_login', 'is_superuser',
            'is_staff', 'is_active', 'date_joined', 'created', 'modified',
            'email', 'first_name', 'last_name', 'phone_number', 'second_phone_number',
        )

    def get_sensitive_fields(self) -> tuple:
        return (
            'email',
            'phone_number',
            'second_phone_number',
        )
