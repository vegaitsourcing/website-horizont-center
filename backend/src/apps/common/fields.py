from drf_extra_fields.fields import Base64ImageField as OriginalBase64ImageField
from django.utils.translation import gettext_lazy as _


class Base64ImageField(OriginalBase64ImageField):
    INVALID_FILE_MESSAGE = _("Please upload a valid image.")
    INVALID_TYPE_MESSAGE = _("The type of the image couldn't be determined.")
