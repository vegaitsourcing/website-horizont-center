from rest_framework import serializers
from rest_framework.serializers import ListSerializer


class ModelListSerializer:
    pass


class BaseModelSerializer(serializers.ModelSerializer):

    def __new__(cls, *args, **kwargs):
        if paginator := kwargs.pop('paginator', None):
            kwargs.update({
                'instance': paginator.page,
                'total_items': paginator.total_items,
                'total_pages': paginator.total_pages
            })
            return cls.many_init(*args, **kwargs)
        return super().__new__(cls, *args, **kwargs)

    def __init__(
            self,
            request=None,
            exclude_sensitive_fields: bool = True,
            total_items: int = None,
            total_pages: int = None,
            **kwargs
    ):
        super(BaseModelSerializer, self).__init__(**kwargs)
        self.total_items = total_items
        self.total_pages = total_pages
        self.request = request
        self.image_fields = self.get_image_fields()
        self.exclude_sensitive_fields = exclude_sensitive_fields

    def to_representation(self, instance):
        data = super(BaseModelSerializer, self).to_representation(instance)

        if self.exclude_sensitive_fields:
            sensitive_fields = self.get_sensitive_fields()
            data = {key: value for key, value in data.items() if key not in sensitive_fields}

        if self.request and self.image_fields:
            for image_field in self.image_fields:
                if data[image_field]:
                    data[image_field] = self.request.build_absolute_uri(data[image_field])

        return data

    def _prepare_image_fields(self, data: dict) -> None:
        for image_field in self.image_fields:
            if not data[image_field]:
                continue
            data[image_field] = self.request.build_absolute_uri(data[image_field])

    def get_image_fields(self) -> tuple:
        """ Returns names of the image fields """
        return tuple()

    def get_sensitive_fields(self) -> tuple:
        """ Returns names of the fields with sensitive data """
        return tuple()

    @property
    def paginated_data(self) -> dict:
        return {
            'items': self.data,
            'pagination': {
                'total_items': self.total_items,
                'total_pages': self.total_pages
            },
        }
