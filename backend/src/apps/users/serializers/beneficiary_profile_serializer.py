from apps.users.models import BeneficiaryProfile
from apps.users.serializers import AbstractProfileSerializer


class BeneficiaryProfileSerializer(AbstractProfileSerializer):
    class Meta:
        model = BeneficiaryProfile
        fields = AbstractProfileSerializer.Meta.fields + (
            'beneficiary_person', 'helping_period', 'weekly_days', 'daily_hours', 'care_type',
        )
