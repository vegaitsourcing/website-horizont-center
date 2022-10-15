from django.contrib import admin

from apps.donations.models import DonationCompany


class DonationCompanyForm(admin.TabularInline):
    model = DonationCompany
    extra = 0
    min_num = 1
    max_num = 1
    can_delete = False
