# Generated by Django 3.1.1 on 2020-11-04 14:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('regelhulpify', '0010_auto_20201104_1412'),
    ]

    operations = [
        migrations.AddField(
            model_name='tool',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to=settings.AUTH_USER_MODEL),
        ),
    ]
