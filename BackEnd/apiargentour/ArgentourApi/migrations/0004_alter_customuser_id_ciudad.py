# Generated by Django 4.2.1 on 2023-06-05 01:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ArgentourApi', '0003_customuser_dni_customuser_edad_customuser_id_ciudad_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='id_Ciudad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ArgentourApi.ciudad'),
        ),
    ]
