from django.db import models
from django.core.validators import MinLengthValidator
from django.utils.translation import gettext_lazy as _
from apps.common.models import BaseModel


class AbstractProfile(BaseModel):
    class Meta:
        abstract = True

    class Gender(models.TextChoices):
        MALE = 'male', _('Male')
        FEMALE = 'female', _('Female')

    image = models.ImageField(
        upload_to='images/users',
        null=True,
        blank=True,
        verbose_name=_('profile image'),
    )
    gender = models.CharField(
        max_length=10,
        choices=Gender.choices,
        verbose_name=_('gender'),
    )
    postal_code = models.IntegerField(
        verbose_name=_('postal code'),
    )
    city = models.CharField(
        max_length=250,
        verbose_name=_('city'),
    )
    description = models.TextField(
        validators=[
            MinLengthValidator(limit_value=100),
        ],
        verbose_name=_('description'),
    )
    user = models.OneToOneField(
        to='users.User',
        verbose_name=_('user'),
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f'{self._meta.verbose_name} ' + _('for') + f' {self.user}'
