class Producto:
    def __init__(self, id_producto, nombre, descripcion, imagen, id_estado, precio, cantidad):
        ### self.id_producto debería ser de una superclase que lleve el conteo
        self.id_producto= id_producto
        self.nombre = nombre
        self.descripcion = descripcion
        self.imagen = imagen
        self.id_estado = id_estado
        self.precio = precio
        self.cantidad = cantidad 