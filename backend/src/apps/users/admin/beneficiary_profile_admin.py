from django.contrib import admin
from apps.users.models import BeneficiaryProfile
from caregivers.admin import ModelAdmin


@admin.register(BeneficiaryProfile)
class BeneficiaryProfileAdmin(ModelAdmin):
    list_display = (
        'beneficiary_person',
        'helping_period',
        'weekly_days',
        'daily_hours',
        'care_type',
    )
    search_fields = (
        'beneficiary_person',
        'care_type',
    )
    ordering = ('care_type',)
