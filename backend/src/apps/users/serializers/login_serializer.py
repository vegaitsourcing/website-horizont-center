from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.request import Request
from apps.users.models import User


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def __init__(self, request: Request, *args, **kwargs):
        super(LoginSerializer, self).__init__(*args, **kwargs)
        self.user = None
        self.request = request

    def validate(self, attrs):
        self.user = User.objects.filter(email=attrs['email']).first()
        if not (self.user and self.user.check_password(raw_password=attrs['password'])):
            raise serializers.ValidationError(_('Invalid credentials'))

        return attrs

    @property
    def validated_data(self):
        token, _ = Token.objects.get_or_create(user=self.user)
        data = {
            'token': token.key,
            'id': self.user.id,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
        }
        if profile := self.user.get_profile():
            data['image'] = self.request.build_absolute_uri(profile.profile_image.url)
        return data

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass
