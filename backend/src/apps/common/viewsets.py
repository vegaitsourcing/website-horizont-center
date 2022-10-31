from http.client import NOT_FOUND
from typing import Type
from django_filters import rest_framework as filters
from django.db.models import QuerySet
from django.http import JsonResponse
from django.utils.translation import gettext_lazy as _
from rest_framework import viewsets
from rest_framework.permissions import BasePermission
from apps.common.models import BaseModel
from apps.common.paginator import Paginator
from apps.common.serializers import ModelSerializer


class ViewSet(viewsets.ViewSet):
    current_handler: str
    model_class: Type[BaseModel]
    serializer_class: Type[ModelSerializer]
    available_alphabet_letters_default_field: str = None
    filter_backends = (filters.DjangoFilterBackend,)
    method_specific_permission_classes: dict[str, BasePermission] = {}

    @property
    def current_handler_name(self) -> str:
        return getattr(self, self.request.method.lower()).__name__

    def get_permissions(self):
        permissions = super(ViewSet, self).get_permissions()
        extra_permission_classes = self.method_specific_permission_classes.get(self.current_handler_name, [])
        permissions.extend([extra_permission_class() for extra_permission_class in extra_permission_classes])
        return permissions

    def retrieve(self, request, pk=None) -> JsonResponse:
        if instance := self.model_class.objects.filter(pk=pk).first():
            serializer_kwargs = self.get_serializer_kwargs(instance=instance)
            serializer = self.serializer_class(**serializer_kwargs)
            return JsonResponse(data=serializer.data)
        return JsonResponse(data={'message': _('Not fount')}, status=NOT_FOUND)

    def list(self, request) -> JsonResponse:
        queryset = self.filter_queryset(queryset=self.model_class.objects.all())
        paginator = Paginator(queryset=queryset, request=request)
        serializer_kwargs = self.get_serializer_kwargs(paginator=paginator)
        serializer = self.serializer_class(**serializer_kwargs)
        return JsonResponse(data=serializer.data, safe=False)

    def filter_queryset(self, queryset) -> QuerySet:
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, self)
        return queryset

    def get_serializer_kwargs(self, **kwargs) -> dict:
        kwargs['request'] = self.request
        return kwargs
