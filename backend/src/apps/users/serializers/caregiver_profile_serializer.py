from apps.users.models import CaregiverProfile
from apps.users.serializers import AbstractProfileSerializer


class CaregiverProfileSerializer(AbstractProfileSerializer):
    class Meta:
        model = CaregiverProfile
        fields = AbstractProfileSerializer.Meta.fields + (
            'birthdate', 'work_application', 'experience', 'weekly_days',
            'daily_hours', 'instagram_url', 'facebook_url',
        )

    def get_sensitive_fields(self) -> tuple:
        sensitive_fields = super(CaregiverProfileSerializer, self).get_sensitive_fields()
        sensitive_fields += ('instagram_url', 'facebook_url')
        return sensitive_fields
