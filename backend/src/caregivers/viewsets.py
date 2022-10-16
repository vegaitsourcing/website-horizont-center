from typing import Type
from django.conf import settings
from django.db.models import QuerySet
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework import viewsets
from caregivers.models import BaseModel
from caregivers.serializers import ListResponseSerializer


class ViewSet(viewsets.ViewSet):
    model_class: Type[BaseModel]
    available_alphabet_letters_default_field: str = None
    serializer_class: Type[serializers.ModelSerializer]
    filter_backends = settings.REST_FRAMEWORK.get('DEFAULT_FILTER_BACKENDS', [])

    def list(self, request, **kwargs) -> JsonResponse:
        serializer = ListResponseSerializer(
            queryset=self.filter_queryset(queryset=self.model_class.objects.all()),
            model_serializer_class=self.serializer_class,
            request=request
        )
        return JsonResponse(data=serializer.data)

    def filter_queryset(self, queryset) -> QuerySet:
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, self)
        return queryset
