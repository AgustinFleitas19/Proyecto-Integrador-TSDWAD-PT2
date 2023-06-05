from django.db import models
from django.contrib.auth.models import AbstractUser




# Create your models here.


class Categoria(models.Model):
    id_Categoria= models.AutoField(primary_key= True)
    nombre= models.CharField(max_length=55, blank= False)
    class Meta:
        db_table= 'categoria'
        verbose_name= 'Categoria'
        verbose_name_plural= 'Categorias'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Producto (models.Model):
    id_Producto= models.AutoField(primary_key= True)
    nombre= models.CharField(max_length= 45, blank= False)
    imagen= models.CharField(max_length=100, blank= True)
    precio= models.DecimalField(default= 2000, decimal_places=2, max_digits=10, blank=False)
    descripcion= models.CharField(max_length=100, blank=True)
    cantidad= models.IntegerField(default=100, blank= False)
    id_Categoria = models.ForeignKey(Categoria, to_field='id_Categoria', on_delete=models.CASCADE)
    class Meta:
        db_table= 'producto'
        verbose_name= 'Producto'
        verbose_name_plural= 'Productos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre


class Provincia (models.Model):
    id_Provincia= models.AutoField(primary_key= True)
    nombre= models.CharField(max_length=45, blank= False)
    class Meta:
        db_table= 'provincia'
        verbose_name= 'Provincia'
        verbose_name_plural= 'Provincias'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class Ciudad (models.Model):
    id_Ciudad= models.AutoField(primary_key= True)
    nombre= models.CharField(max_length=45, blank=False)
    id_Provincia= models.ForeignKey(Provincia, to_field='id_Provincia', on_delete=models.CASCADE)
    class Meta:
        db_table= 'ciudad'
        verbose_name= 'Ciudad'
        verbose_name_plural= 'Ciudades'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    dni= models.IntegerField(default=0, blank=True)
    tel= models.CharField(max_length=45, blank=True)
    edad= models.IntegerField(default=0, blank=True)
    id_Provincia= models.ForeignKey(Provincia, blank=True, null=True, to_field='id_Provincia', on_delete=models.CASCADE)
    id_Ciudad= models.ForeignKey(Ciudad,blank=True, null=True, to_field='id_Ciudad', on_delete=models.CASCADE)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']
    
class Carrito (models.Model):
    id_Carrito= models.AutoField(primary_key=True)
    subtotal= models.DecimalField(default=0, decimal_places=2, max_digits=10, blank= False)
    id_Usuario= models.ForeignKey(CustomUser, to_field='email', on_delete=models.CASCADE)
    id_Producto= models.ForeignKey(Producto, to_field='id_Producto', on_delete=models.CASCADE)
    class Meta:
        db_table= 'carrito'
        verbose_name= 'Carrito'
        verbose_name_plural= 'Carritos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre 
    

class Descuento (models.Model):
    id_Descuento= models.AutoField(primary_key=True)
    nombre= models.CharField(max_length=45, blank=False)
    class Meta:
        db_table= 'descuento'
        verbose_name= 'Descuento'
        verbose_name_plural= 'Descuentos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Reserva (models.Model):
    id_Reserva= models.AutoField(primary_key=True)
    cantidad= models.IntegerField(default=0, blank= False)
    fecha_Reserva= models.DateField(blank=False)
    total= models.DecimalField(decimal_places=2, max_digits=2, blank=False)
    id_Usuario= models.ForeignKey(CustomUser, to_field='email', on_delete= models.CASCADE)
    id_Producto= models.ForeignKey(Producto, to_field='id_Producto', on_delete=models.CASCADE)
    id_Descuento= models.ForeignKey(Descuento, to_field='id_Descuento', on_delete=models.CASCADE)
    class Meta:
        db_table= 'reserva'
        verbose_name= 'Reserva'
        verbose_name_plural= 'Reservas'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class MetodoPago(models.Model):
    id_Metodo= models.AutoField(primary_key=True)
    nombre= models.CharField(max_length=45, blank=False)
    class Meta:
        db_table= 'metodo'
        verbose_name= 'Metodo'
        verbose_name_plural= 'Metodos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre

class Pago (models.Model):
    id_Pago= models.AutoField(primary_key=True)
    fecha_Emision= models.DateField(blank=False)
    monto= models.DecimalField( decimal_places=2, max_digits=10, blank=False)
    id_Reserva= models.ForeignKey(Reserva, to_field='id_Reserva', on_delete=models.CASCADE)
    id_Metodo= models.ForeignKey(MetodoPago, to_field='id_Metodo', on_delete=models.CASCADE)
    class Meta:
        db_table= 'pago'
        verbose_name= 'Pago'
        verbose_name_plural= 'Pagos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre