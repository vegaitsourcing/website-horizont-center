from src.apps.users.models.abstract_profile import AbstractProfile
from django.db import models


class CaregiverProfile(AbstractProfile):
    experience = models.CharField(max_lenght=250)
    weekly_days = models.IntegerField()
    daily_hours = models.FloatField()
    work_application = models.CharField(max_lenght=250)
    birthday = models.DateField(max_lenght=10)  # 10 kaktera ako ima
    instagram_url = models.URLField(max_lenght=250)
    facebook_url = models.URLField(max_lenght=250)
