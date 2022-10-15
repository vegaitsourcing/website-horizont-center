from django.contrib import admin

from apps.donations.models.financial_info import FinancialInfo


class FinancialInfoInline(admin.StackedInline):
    model = FinancialInfo
