# Generated by Django 4.1.2 on 2022-11-04 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_rename_profile_image_beneficiaryprofile_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiaryprofile',
            name='weekly_days',
            field=models.CharField(max_length=250, verbose_name='weekly days'),
        ),
        migrations.AlterField(
            model_name='caregiverprofile',
            name='weekly_days',
            field=models.CharField(max_length=250, verbose_name='weekly days'),
        ),
    ]
