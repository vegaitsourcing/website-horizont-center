# Generated by Django 4.1.2 on 2022-10-22 10:49

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='description',
            field=models.TextField(default='', validators=[django.core.validators.MinLengthValidator(limit_value=100)], verbose_name='description'),
            preserve_default=False,
        ),
    ]