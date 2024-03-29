# Generated by Django 5.0.1 on 2024-01-16 15:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('devtools', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Idea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_date', models.DateTimeField(auto_created=True, auto_now=True, verbose_name='수정일')),
                ('title', models.CharField(max_length=24, verbose_name='제목')),
                ('image', models.ImageField(blank=True, upload_to='ideas/%Y%m%d', verbose_name='이미지')),
                ('content', models.TextField(verbose_name='아이디어 설명')),
                ('interest', models.IntegerField(default=0, verbose_name='아이디어 관심도')),
                ('devtool', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='devtools.devtool', verbose_name='개발툴')),
            ],
        ),
    ]
