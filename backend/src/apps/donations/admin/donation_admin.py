from django.contrib import admin
from apps.donations.admin.donation_company_admin_inline import DonationCompanyAdminInline
from apps.donations.admin.financial_info_admin_inline import FinancialInfoAdminInline
from apps.donations.models.donation import Donation
from caregivers.admin import ModelAdmin


@admin.register(Donation)
class DonationAdmin(ModelAdmin):
    search_fields = (
        'title',
        'subtitle',
    )
    list_filter = (
        'is_active',
    )
    list_display = (
        'title',
        'is_active',
        'created',
    )
    inlines = [
        DonationCompanyAdminInline,
        FinancialInfoAdminInline
    ]
    ordering = (
        'is_active',
        'title'
    )
