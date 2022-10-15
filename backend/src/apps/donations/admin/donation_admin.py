from django.contrib import admin

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
    search_fields = ['title']
    ordering = (
        'is_active',
        'title'
    )

