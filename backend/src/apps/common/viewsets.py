from http.client import NOT_FOUND
from typing import Type

from django.conf import settings
from django.db.models import QuerySet
from django.http import JsonResponse
from django.utils.translation import gettext_lazy as _
from rest_framework import viewsets
from rest_framework.permissions import BasePermission

from apps.common.models import BaseModel
from apps.common.paginator import Paginator
from apps.common.serializers import BaseModelSerializer


class ViewSet(viewsets.ViewSet):
    current_handler: str
    model_class: Type[BaseModel]
    serializer_class: Type[BaseModelSerializer]
    available_alphabet_letters_default_field: str = None
    filter_backends = settings.REST_FRAMEWORK.get('DEFAULT_FILTER_BACKENDS', [])
    method_specific_permission_classes: dict[str, BasePermission] = {}

    def get_current_handler_name(self) -> str:
        return getattr(self, self.request.method.lower()).__name__

    def get_permissions(self):
        permissions = super(ViewSet, self).get_permissions()
        handler_name = self.get_current_handler_name()
        extra_permission_classes = self.method_specific_permission_classes.get(handler_name, [])
        permissions.extend([extra_permission_class() for extra_permission_class in extra_permission_classes])
        return permissions

    def list(self, request) -> JsonResponse:
        paginator = Paginator(
            queryset=self.filter_queryset(queryset=self.model_class.objects.all()),
            request=request
        )
        serializer = self.serializer_class(paginator=paginator)
        return JsonResponse(data=serializer.paginated_data, safe=False)

    def filter_queryset(self, queryset) -> QuerySet:
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, self)
        return queryset

    def retrieve(self, request, pk=None) -> JsonResponse:
        if instance := self.model_class.objects.filter(pk=pk).first():
            serializer = self.serializer_class(instance, request=request)
            return JsonResponse(data=serializer.data)
        return JsonResponse(data={'message': _('Not fount')}, status=NOT_FOUND)
