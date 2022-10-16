from rest_framework import serializers


class BaseModelSerializer(serializers.ModelSerializer):
    class Meta:
        image_fields = ()

    def __init__(self, *args, request, **kwargs):
        super(BaseModelSerializer, self).__init__(*args, **kwargs)
        self.request = request

    def to_representation(self, instance):
        data = super(BaseModelSerializer, self).to_representation(instance)
        for image_field in self.Meta.image_fields:
            data[image_field] = self.request.build_absolute_uri(data[image_field])
        return data
