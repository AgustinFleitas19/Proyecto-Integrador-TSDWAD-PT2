from django.urls import path, include
from .views import EliminarProducto, LoginView, LogoutView, ModificarProducto, ObtenerProducto, SignupView, ProfileView, ListarUsuarios, agregarProducto

urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),
     path('auth/reset/',
         include('django_rest_passwordreset.urls',
                 namespace='password_reset')),
     path('auth/registro/',
         SignupView.as_view(), name='auth_signup'),
     path('user/profile/',
         ProfileView.as_view(), name='user_profile'),
     path('usuarios/',
         ListarUsuarios.as_view(), name='listar_usuarios'),
     path('agregarproducto/',
         agregarProducto.as_view(), name='agregar_producto'),
    path('modificarproducto/<int:pk>/',
        ModificarProducto.as_view(), name='modificar_producto'),     
    path('productos/<int:pk>/',
          EliminarProducto.as_view(), name='eliminar_producto'),
    path('producto/<int:pk>/', ObtenerProducto.as_view(), name='obtener_producto')
]