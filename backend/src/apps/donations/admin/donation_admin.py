from django.contrib import admin

from apps.donations.admin.donation_company_admin_inline import DonationCompanyForm
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
        DonationCompanyForm
    ]
    search_fields = ['title']
    ordering = (
        'is_active',
        'title'
    )
