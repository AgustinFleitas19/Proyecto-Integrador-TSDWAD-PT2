from django.db import models

# Create your models here.

class Producto(models.Model):
    nombreProducto = models.CharField(max_length=45)
    imagenProducto = models.CharField(max_length=95)
    precio = models.FloatField()
    descProducto = models.CharField(max_length=45)


class Usuario(models.Model):
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    edad = models.IntegerField()
    dni = models.IntegerField()
    provincia = models.IntegerField()
    ciudad = models.IntegerField()
    correo = models.CharField(max_length=99)
    Rol = models.IntegerField()


