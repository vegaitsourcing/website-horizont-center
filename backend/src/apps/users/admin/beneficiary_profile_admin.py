from django.contrib import admin
from apps.users.admin import AbstractProfileAdmin
from apps.users.models import BeneficiaryProfile


@admin.register(BeneficiaryProfile)
class BeneficiaryProfileAdmin(AbstractProfileAdmin):
    search_fields = (
        'beneficiary_person',
        'care_type',
        'user__first_name',
        'user__last_name',
        'user__email',
    )
    list_display = (
        'user',
        'has_active_user',
        'user_email',
        'beneficiary_person',
        'helping_period',
        'weekly_days',
        'daily_hours',
        'care_type',
    )
