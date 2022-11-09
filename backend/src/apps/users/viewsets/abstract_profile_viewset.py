from http.client import BAD_REQUEST, NOT_FOUND

from django.utils.translation import gettext_lazy as _
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated

from apps.common.viewsets import ViewSet


class AbstractProfileViewSet(ViewSet):
    method_specific_permission_classes = {
        'retrieve': [IsAuthenticated],
        'partial_update': [IsAuthenticated],
    }

    def get_serializer_kwargs(self, **kwargs) -> dict:
        kwargs = super(AbstractProfileViewSet, self).get_serializer_kwargs(**kwargs)
        if self.current_handler_name == 'retrieve':
            kwargs['exclude_sensitive_fields'] = False
        return kwargs

    def partial_update(self, request, pk=None) -> JsonResponse:
        try:
            profile = self.model_class.objects.get(pk=pk)
        except self.model_class.DoesNotExist:
            return JsonResponse(data={'message': _('Not fount')}, status=NOT_FOUND)

        serializer = self.serializer_class(data=request.data, request=request, partial=True)
        if not serializer.is_valid():
            return JsonResponse(data={'errors': serializer.errors}, status=BAD_REQUEST)

        if user_kwargs := serializer.validated_data.pop('user', {}):
            profile.user.update(**user_kwargs)
        profile_kwargs = serializer.validated_data
        profile.update(**profile_kwargs)

        return JsonResponse(data={'message': 'success'})
