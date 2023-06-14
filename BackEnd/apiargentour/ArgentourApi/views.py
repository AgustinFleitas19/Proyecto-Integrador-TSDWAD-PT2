from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import Categoria, Producto, CustomUser
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from .serializers import ProductoSerializer
from .serializers import CategoriaSerializer
from rest_framework import viewsets
from rest_framework_simplejwt.tokens import RefreshToken


class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)
        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            return Response(
                {'token': str(refresh.access_token),
                 'is_staff': user.is_staff},
                status=status.HTTP_200_OK)
        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)

        # Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)
class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class verProductos(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class verCategorias(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class agregarProducto(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated] #Solo usuarios logueados pueden ver.
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user
class ListarUsuarios(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)

class EliminarProducto(APIView):
    permission_classes = [IsAdminUser]
    def delete(self, request, pk, format=None):
        try:
            producto = Producto.objects.get(pk=pk)
        except Producto.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ModificarProducto(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, pk, format=None):
        try:
            producto = Producto.objects.get(pk=pk)
        except Producto.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProductoSerializer(producto, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ObtenerProducto(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk, format=None):
        try:
            producto = Producto.objects.get(pk=pk)
        except Producto.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProductoSerializer(producto)
        return Response(serializer.data)

    
