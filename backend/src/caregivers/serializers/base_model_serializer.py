from rest_framework import serializers


class BaseModelSerializer(serializers.ModelSerializer):

    def __init__(self, *args, request, **kwargs):
        super(BaseModelSerializer, self).__init__(*args, **kwargs)
        self.request = request

    def to_representation(self, instance):
        data = super(BaseModelSerializer, self).to_representation(instance)
        for image_field_name in self.get_image_field_names():
            if not data[image_field_name]:
                continue
            data[image_field_name] = self.request.build_absolute_uri(data[image_field_name])
        return data

    def get_image_field_names(self) -> tuple:
        return tuple()
