# Generated by Django 4.1.2 on 2022-10-15 16:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='blog_author',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='blog_category',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='blog_section',
        ),
        migrations.AddField(
            model_name='blogauthor',
            name='blog',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='blogs.blog', verbose_name='blog'),
        ),
        migrations.AddField(
            model_name='blogcategory',
            name='blog',
            field=models.ManyToManyField(to='blogs.blog', verbose_name='blog'),
        ),
        migrations.AddField(
            model_name='blogsection',
            name='blog',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='blogs.blog', verbose_name='blog'),
        ),
    ]