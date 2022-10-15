from apps.users.serializers import UserSerializer, CaregiverProfileSerializer


class CaregiverUserSerializer(UserSerializer):
    profile = CaregiverProfileSerializer(source='caregiver_profile')
