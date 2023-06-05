# Generated by Django 4.2.1 on 2023-06-05 00:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ArgentourApi', '0002_descuento_metodopago_provincia_customuser_reserva_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='dni',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='edad',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='id_Ciudad',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ArgentourApi.ciudad'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='id_Provincia',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ArgentourApi.provincia'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='tel',
            field=models.CharField(blank=True, max_length=45),
        ),
    ]
