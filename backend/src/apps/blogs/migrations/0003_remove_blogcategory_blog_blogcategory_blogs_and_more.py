# Generated by Django 4.1.2 on 2022-10-15 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0002_remove_blog_blog_author_remove_blog_blog_category_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogcategory',
            name='blog',
        ),
        migrations.AddField(
            model_name='blogcategory',
            name='blogs',
            field=models.ManyToManyField(related_name='categories', to='blogs.blog', verbose_name='blogs'),
        ),
        migrations.AlterField(
            model_name='blogcategory',
            name='name',
            field=models.CharField(max_length=100, verbose_name='category name'),
        ),
    ]