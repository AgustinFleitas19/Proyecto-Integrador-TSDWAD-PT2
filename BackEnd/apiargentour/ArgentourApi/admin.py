from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import Categoria
from .models import Producto
from .models import Provincia
from .models import Ciudad
from .models import Carrito
from .models import Descuento
from .models import Reserva
from .models import MetodoPago
from .models import Pago

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nombre",)

class ProductoAdmin(admin.ModelAdmin):
    list_display = ("nombre", "imagen", "precio", "descripcion", "cantidad", "id_Categoria")

class ProvinciaAdmin(admin.ModelAdmin):
    list_display = ("nombre",)

class CiudadAdmin(admin.ModelAdmin):
    list_display = ("nombre", "id_Provincia")

class CarritoAdmin(admin.ModelAdmin):
    list_display = ("subtotal", "id_Usuario", "id_Producto")

class DescuentoAdmin(admin.ModelAdmin):
    list_display = ("nombre",)

class ReservaAdmin(admin.ModelAdmin):
    list_display = ("cantidad", "fecha_Reserva", "total", "id_Usuario", "id_Producto", "id_Descuento")

class MetodoPagoAdmin(admin.ModelAdmin):
    list_display = ("nombre",)

class PagoAdmin(admin.ModelAdmin):
    list_display = ("fecha_Emision", "monto", "id_Reserva", "id_Metodo")

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
   pass
   """ list_display = ['username', 'email', 'dni', 'tel', 'edad', 'id_Provincia', 'id_Ciudad']
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('email', 'dni', 'tel', 'edad', 'id_Provincia', 'id_Ciudad')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'dni', 'tel', 'edad', 'id_Provincia', 'id_Ciudad'),
        }),
    )"""
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Provincia, ProvinciaAdmin)
admin.site.register(Ciudad, CiudadAdmin)
admin.site.register(Carrito, CarritoAdmin)
admin.site.register(Descuento, DescuentoAdmin)
admin.site.register(Reserva, ReservaAdmin)
admin.site.register(MetodoPago, MetodoPagoAdmin)
admin.site.register(Pago, PagoAdmin)
