# Generated by Django 3.1.2 on 2020-10-06 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80, verbose_name='标题')),
                ('body', models.TextField(blank=True, max_length=200, verbose_name='内容')),
                ('created_time', models.DateTimeField(verbose_name='发布时间')),
                ('updated_time', models.DateTimeField(verbose_name='更新时间')),
            ],
            options={
                'verbose_name': '文章',
                'verbose_name_plural': '文章',
            },
        ),
    ]
