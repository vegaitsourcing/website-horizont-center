from src.caregivers.models import BaseModel
from django.db import models


class Beneficiary(BaseModel):
    beneficiary_person = models.CharField()
    helping_period = models.CharField()
    weekly_days = models.IntegerField()
    daily_hours = models.FloatFiled()
    care_type = models.CharField()
