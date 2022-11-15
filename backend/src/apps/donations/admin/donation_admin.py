from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from apps.common.admin import ModelAdminMixin
from apps.donations.admin.donation_company_admin_inline import DonationCompanyAdminInline
from apps.donations.admin.financial_info_admin_inline import FinancialInfoAdminInline
from apps.donations.models.donation import Donation


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin, ModelAdminMixin):
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
        'is_financial',
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

    def is_financial(self, obj: Donation = None) -> bool:
        return bool(obj.financial_info)

    is_financial.boolean = True
    is_financial.short_description = _('financial?')
