from django.contrib import admin

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
        'birthdate',
        'city',
        'weekly_days',
        'daily_hours',
        'work_application',
    )
