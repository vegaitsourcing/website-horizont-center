from django.contrib import admin
from apps.users.models.caregiver_profile import CaregiverProfile


@admin.register(CaregiverProfile)
class CaregiverProfileAdmin(admin.ModelAdmin):
    list_display = (
        # Add first name and last name
        'birthdate',
        'city',
        'weekly_days',
        'daily_hours',
        'work_application',
    )

    search_fields = (
        'city',
        'work_application',
    )
    ordering = ('city',)
