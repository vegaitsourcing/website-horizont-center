from apps.users.serializers import AbstractUserSerializer, BeneficiaryProfileSerializer


class BeneficiaryUserSerializer(AbstractUserSerializer):
    profile = BeneficiaryProfileSerializer(source='beneficiary_profile')
