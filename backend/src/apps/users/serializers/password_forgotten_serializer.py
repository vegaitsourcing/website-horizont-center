from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from rest_framework.request import Request

from apps.common.serializers import SimpleSerializer
from apps.users.models import User


class PasswordForgottenSerializer(SimpleSerializer):
    email = serializers.CharField()

    def __init__(self, request: Request, *args, **kwargs):
        super(PasswordForgottenSerializer, self).__init__(*args, **kwargs)
        self.user = None
        self.request = request

    def validate(self, attrs):
        self.user = User.objects.filter(email=attrs['email']).first()
        if not self.user:
            raise serializers.ValidationError({'email': _('Invalid email address')})

        if not self.user.can_reset_password:
            message = _('Password reset email has been sent already. Try requesting it again tomorrow.')
            raise serializers.ValidationError({'email': message})

        return attrs
