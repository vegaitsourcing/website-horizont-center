from django.contrib import admin


class ModelAdmin(admin.ModelAdmin):
    def get_readonly_fields(self, request, obj=None):
        readonly_fields = super(ModelAdmin, self).get_readonly_fields(request, obj)
        if 'id' not in readonly_fields:
            readonly_fields = ('id',) + readonly_fields

        return readonly_fields
