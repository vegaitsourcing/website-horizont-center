# Generated by Django 4.1.2 on 2022-11-06 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0002_blog_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogauthor',
            name='linkedin_url',
            field=models.URLField(blank=True, null=True, verbose_name='linkedin URL'),
        ),
        migrations.AddField(
            model_name='blogauthor',
            name='twitter_url',
            field=models.URLField(blank=True, null=True, verbose_name='twitter URL'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.ImageField(null=True, upload_to='images/blogs', verbose_name='cover image'),
        ),
        migrations.AlterField(
            model_name='blogauthor',
            name='facebook_url',
            field=models.URLField(blank=True, null=True, verbose_name='facebook URL'),
        ),
        migrations.AlterField(
            model_name='blogauthor',
            name='instagram_url',
            field=models.URLField(blank=True, null=True, verbose_name='instagram URL'),
        ),
        migrations.AlterField(
            model_name='blogsection',
            name='media_url',
            field=models.URLField(blank=True, null=True, verbose_name='media URL'),
        ),
    ]
