from django.contrib.admin.options import BaseModelAdmin


class ModelAdminMixin(BaseModelAdmin):

    def get_readonly_fields(self, request, obj=None):
        readonly_fields = list(super(ModelAdminMixin, self).get_readonly_fields(request=request, obj=obj))
        if 'id' not in readonly_fields:
            readonly_fields.append('id')
        return readonly_fields

    def get_fields(self, request, obj=None):
        fields = list(super(ModelAdminMixin, self).get_fields(request=request, obj=obj))
        if 'id' in fields:
            fields.remove('id')
        fields.insert(0, 'id')
        return fields
