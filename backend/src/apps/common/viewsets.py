from http.client import NOT_FOUND
from typing import Type
from django.conf import settings
from django.db.models import QuerySet
from django.http import JsonResponse
from django.utils.translation import gettext_lazy as _
from rest_framework import viewsets

from apps.common.models import BaseModel
from apps.common.serializers import BaseModelSerializer, ListResponseSerializer


class ViewSet(viewsets.ViewSet):
    model_class: Type[BaseModel]
    available_alphabet_letters_default_field: str = None
    serializer_class: Type[BaseModelSerializer]
    filter_backends = settings.REST_FRAMEWORK.get('DEFAULT_FILTER_BACKENDS', [])

    def list(self, request, **kwargs) -> JsonResponse:
        serializer = ListResponseSerializer(
            queryset=self.filter_queryset(queryset=self.model_class.objects.all()),
            model_serializer_class=self.serializer_class,
            request=request,
        )
        return JsonResponse(data=serializer.data)

    def filter_queryset(self, queryset) -> QuerySet:
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, self)
        return queryset

    def retrieve(self, request, pk=None) -> JsonResponse:
        if instance := self.model_class.objects.filter(pk=pk).first():
            serializer = self.serializer_class(instance, request=request)
            return JsonResponse(data=serializer.data)
        return JsonResponse(data={'message': _('Not fount')}, status=NOT_FOUND)
