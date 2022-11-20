from django.core import signing
from apps.users.models import User, CaregiverProfile, BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer, CaregiverProfileSerializer


def create_caregiver_user(serializer: CaregiverProfileSerializer, password: str) -> User:
    user_kwargs = serializer.validated_data.pop('user')
    user_kwargs['password'] = password
    user = User.objects.create_user(**user_kwargs)
    CaregiverProfile.objects.create(user=user, **serializer.validated_data)

    return user


def create_beneficiary_user(serializer: BeneficiaryProfileSerializer, password: str) -> User:
    user_kwargs = serializer.validated_data.pop('user')
    user_kwargs['password'] = password
    user = User.objects.create_user(**user_kwargs)
    BeneficiaryProfile.objects.create(user=user, **serializer.validated_data)

    return user


def get_email_from_hash(url_hash: str) -> str:
    decoded_key = signing.loads(url_hash)
    return decoded_key.get('email')
