# Generated by Django 4.1.2 on 2022-10-22 10:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='beneficiaryprofile',
            options={'verbose_name': 'Beneficiary Profile', 'verbose_name_plural': 'Beneficiary Profiles'},
        ),
        migrations.AlterModelOptions(
            name='caregiverprofile',
            options={'verbose_name': 'Caregiver Profile', 'verbose_name_plural': 'Caregiver Profiles'},
        ),
    ]
