from apps.users.serializers import AbstractUserSerializer, CaregiverProfileSerializer


class CaregiverUserSerializer(AbstractUserSerializer):
    profile = CaregiverProfileSerializer(source='caregiver_profile')
