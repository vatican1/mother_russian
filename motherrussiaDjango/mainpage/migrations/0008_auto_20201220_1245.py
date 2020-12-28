# Generated by Django 3.1.4 on 2020-12-20 09:45

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0007_auto_20201220_0031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gamemode',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, help_text='Unique ID', primary_key=True, serialize=False),
        ),
    ]