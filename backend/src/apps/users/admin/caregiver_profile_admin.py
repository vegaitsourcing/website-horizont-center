from django.contrib import admin
from apps.users.models.caregiver_profile import CaregiverProfile


@admin.register(CaregiverProfile)
class CaregiverProfileAdmin(admin.ModelAdmin):
    list_display = (
        'birthdate',
        'city',
        'weekly_days',
        'daily_hours',
        'work_application',
        'first_name'
    )
