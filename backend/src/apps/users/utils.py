from apps.users.models import User, CaregiverProfile, BeneficiaryProfile
from apps.users.serializers import CaregiverUserSerializer, BeneficiaryUserSerializer
from caregivers.utils import VerificationToken, SendVerificationTokenEmailNotification


def send_verification_email(user: User) -> None:
    url_hash = VerificationToken.generate_url_hash_from_email(user.email)
    send_verification_token_email_notification = SendVerificationTokenEmailNotification(url_hash, user.email)
    send_verification_token_email_notification.try_to_send_email()


def create_caregiver_user(caregiver_serializer: CaregiverUserSerializer) -> User:
    caregiver_profile_kwargs = caregiver_serializer.validated_data.pop('caregiver_profile')
    user = User.objects.create_user(**caregiver_serializer.validated_data)
    CaregiverProfile.objects.create(user=user, **caregiver_profile_kwargs)

    return user


def create_beneficiary_user(beneficiary_serializer: BeneficiaryUserSerializer) -> User:
    beneficiary_profile_kwargs = beneficiary_serializer.validated_data.pop('beneficiary_profile')
    user = User.objects.create_user(**beneficiary_serializer.validated_data)
    BeneficiaryProfile.objects.create(user=user, **beneficiary_profile_kwargs)

    return user
