from typing import Type
from django.db.models import QuerySet
from apps.common.paginator import Paginator
from apps.common.serializers import SimpleSerializer, BaseModelSerializer


class ListResponseSerializer(SimpleSerializer):

    def __init__(
            self, queryset: QuerySet, request,
            model_serializer_class: Type[BaseModelSerializer],
            *args, **kwargs
    ):
        super(ListResponseSerializer, self).__init__(*args, **kwargs)
        self.request = request
        self.model_serializer_class = model_serializer_class
        self.paginator = Paginator(queryset=queryset, request=request)

    @property
    def data(self) -> dict:
        model_serializer = self.model_serializer_class(self.paginator.page, many=True, request=self.request)

        pagination = {
            'total_items': self.paginator.total_items,
            'total_pages': self.paginator.total_pages
        }

        return {
            'items': model_serializer.data,
            'pagination': pagination
        }
