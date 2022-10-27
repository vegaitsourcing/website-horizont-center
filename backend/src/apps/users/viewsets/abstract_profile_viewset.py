from rest_framework.permissions import IsAuthenticated
from apps.common.viewsets import ViewSet


class AbstractProfileViewSet(ViewSet):
    method_specific_permission_classes = {
        'retrieve': [IsAuthenticated],
    }

    def get_serializer_kwargs(self, **kwargs) -> dict:
        kwargs = super(AbstractProfileViewSet, self).get_serializer_kwargs(**kwargs)
        if self.current_handler_name == 'retrieve':
            kwargs['exclude_sensitive_fields'] = False
        return kwargs
