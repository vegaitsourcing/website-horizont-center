from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from apps.common.admin import ModelAdminMixin
from apps.users.models import AbstractProfile


class AbstractProfileAdmin(admin.ModelAdmin, ModelAdminMixin):

    def user(self, obj: AbstractProfile = None) -> str:
        return str(obj.user)

    user.short_description = _('user')

    def user_email(self, obj: AbstractProfile) -> str:
        return obj.user.email if obj else '-'

    user_email.short_description = _('user email')

    def has_active_user(self, obj: AbstractProfile) -> str:
        return obj.user.is_active if obj else '-'

    has_active_user.short_description = _('is active')
    has_active_user.boolean = True
