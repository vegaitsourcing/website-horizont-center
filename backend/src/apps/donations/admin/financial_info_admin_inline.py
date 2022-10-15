from django.contrib import admin

from apps.donations.models.financial_info import FinancialInfo


class FinancialInfoAdminInline(admin.StackedInline):
    model = FinancialInfo
