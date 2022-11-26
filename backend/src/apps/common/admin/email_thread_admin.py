from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from apps.common.admin import ModelAdminMixin
from apps.common.models import EmailThread


@admin.register(EmailThread)
class EmailThreadAdmin(admin.ModelAdmin, ModelAdminMixin):
    search_fields = (
        'recipient_email',
    )
    list_filter = (
        'subject',
        'status',
    )
    list_display = (
        'subject',
        'colored_status',
        'recipient_email',
    )
    fields = (
        'subject',
        'status',
        'recipient_email',
        'template_path',
        'group',
        'email_context',
        'created',
        'modified',
    )

    def colored_status(self, obj: EmailThread = None) -> str:
        if not obj:
            return '-'

        colors_map = {
            EmailThread.Statuses.PENDING: ('#e0e0e0', 'black'),
            EmailThread.Statuses.SUCCESS: ('#def7d9', 'green'),
            EmailThread.Statuses.FAILURE: ('#f7d9d9', 'red'),
        }

        background_color, text_color = colors_map.get(obj.status)

        style = (
            f'color: {text_color};'
            f'background-color: {background_color};'
            'text-align: center;'
            'border-radius: 5px;'
            'padding: 1px 3px;'
            'min-width: 75px;'
            'width: fit-content;'
        )

        return mark_safe(
            f'<div style="{style}">{obj.status}</div>'
        )

    colored_status.short_description = _('status')

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False
