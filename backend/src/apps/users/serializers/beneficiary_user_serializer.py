from apps.users.serializers import UserSerializer, BeneficiaryProfileSerializer


class BeneficiaryUserSerializer(UserSerializer):
    profile = BeneficiaryProfileSerializer(source='beneficiary_profile')
