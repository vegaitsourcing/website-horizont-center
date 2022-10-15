from apps.users.models import CaregiverProfile
from apps.users.serializers import AbstractProfileSerializer


class CaregiverProfileSerializer(AbstractProfileSerializer):
    class Meta:
        model = CaregiverProfile
        fields = AbstractProfileSerializer.Meta.fields + (
            'birthdate', 'work_application', 'experience', 'weekly_days',
            'daily_hours', 'instagram_url', 'facebook_url',
        )
