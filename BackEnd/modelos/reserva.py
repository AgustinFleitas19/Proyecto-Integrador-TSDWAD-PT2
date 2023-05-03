class Reserva:
    def __init__(self,fecha_pedido, fecha_entrega, direccion_entrega, ciudad_entrega, provincia_entrega, cod_postal_entrega, encargo, total, descuento, pagado):
        ### self.id_reserva debería ser de una superclase que lleve el conteo
        self.fecha_pedido = fecha_pedido
        self.fecha_entrega = fecha_entrega
        self.direccion_entrega = direccion_entrega
        self.ciudad_entrega = ciudad_entrega
        self.provincia_entrega = provincia_entrega
        self.cod_postal_entrega = cod_postal_entrega
        self.encargo = encargo
        self.total = total
        self.descuento = descuento
        self.pagado = pagado