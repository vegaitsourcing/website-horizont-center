from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from apps.common.admin import ModelAdminMixin
from apps.common.models import OrganizationPartner


@admin.register(OrganizationPartner)
class OrganizationPartnerAdmin(admin.ModelAdmin, ModelAdminMixin):
    search_fields = (
        'name',
    )
    list_display = (
        'name',
        'link',
    )

    def link(self, obj: OrganizationPartner = None) -> str:
        return mark_safe(f'<a href="{obj.url}">{obj.url}</a>') if obj else '-'

    link.short_description = _('link')
