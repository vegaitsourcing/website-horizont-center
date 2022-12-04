from apps.common.models import OrganizationPartner
from apps.common.serializers import OrganizationPartnerSerializer
from apps.common.viewsets import ViewSet


class OrganizationPartnerViewSet(ViewSet):
    model_class = OrganizationPartner
    serializer_class = OrganizationPartnerSerializer
