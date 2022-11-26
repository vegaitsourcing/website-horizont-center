from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from apps.users.admin import AbstractProfileAdmin
from apps.users.models.caregiver_profile import CaregiverProfile


@admin.register(CaregiverProfile)
class CaregiverProfileAdmin(AbstractProfileAdmin):
    search_fields = (
        'city',
        'work_application',
        'user__first_name',
        'user__last_name',
        'user__email',
    )
    list_display = (
        'user',
        'user_email',
        'birthdate',
        'city',
        'weekly_days',
        'daily_hours',
        'work_application',
    )

    def user_email(self, obj: CaregiverProfile) -> str:
        return obj.user.email if obj else '-'

    user_email.short_description = _('user email')
