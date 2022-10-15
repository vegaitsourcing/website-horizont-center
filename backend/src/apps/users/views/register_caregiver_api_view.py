from http.client import BAD_REQUEST
from django.http import JsonResponse
from rest_framework.views import APIView
from apps.users.models import User, CaregiverProfile
from apps.users.serializers import CaregiverUserSerializer
from caregivers.utils.send_verification_token_email_notification import SendVerificationTokenEmailNotification
from caregivers.utils.verification_token import VerificationToken


class RegisterCaregiverAPIView(APIView):

    def post(self, request, **kwargs) -> JsonResponse:
        caregiver_serializer = CaregiverUserSerializer(data=request.data)
        if caregiver_serializer.is_valid():
            caregiver_profile_kwargs = caregiver_serializer.validated_data.pop('caregiver_profile')
            user = User.objects.create_user(**caregiver_serializer.validated_data)
            CaregiverProfile.objects.create(user=user, **caregiver_profile_kwargs)

            # TODO send email with generate hash
            url_hash = VerificationToken.generate_url_hash_from_email(user.email)
            send_verification_token_email_notification = SendVerificationTokenEmailNotification(url_hash, user.email)
            send_verification_token_email_notification.try_to_send_email()
            return JsonResponse(data={'message': 'success'})
        return JsonResponse(data={'errors': caregiver_serializer.errors}, status=BAD_REQUEST)

