from django.contrib import admin

from apps.donations.admin.donation_company_admin_inline import DonationCompanyAdminInline
from apps.donations.admin.financial_info_admin_inline import FinancialInfoAdminInline
from apps.donations.models.donation import Donation


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'subtitle',
        'image',
        'description',
        'is_active',
    )
    inlines = [
        DonationCompanyAdminInline,
        FinancialInfoAdminInline
    ]
    search_fields = ['title']
    ordering = (
        'is_active',
        'title'
    )
