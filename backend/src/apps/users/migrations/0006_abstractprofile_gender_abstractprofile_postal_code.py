# Generated by Django 4.1.2 on 2022-10-15 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_beneficiaryprofile_daily_hours'),
    ]

    operations = [
        migrations.AddField(
            model_name='abstractprofile',
            name='gender',
            field=models.CharField(choices=[('MALE', 'Male'), ('FEMALE', 'Female')], default='MALE', max_length=10, verbose_name='gender'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='abstractprofile',
            name='postal_code',
            field=models.IntegerField(default=21000, verbose_name='postal code'),
            preserve_default=False,
        ),
    ]
