from django.contrib import admin

from apps.donations.admin.donation_admin import DonationAdmin
from apps.donations.models.financial_donation import FinancialDonation


@admin.register(FinancialDonation)
class FinancialDonationAdmin(DonationAdmin):
    list_display = (
        "payment_purpose",
        "payment_receiver",
        "payment_code",
        "payment_bank_account",
        "payment_model",
        "payment_reference_number",
    )
