class Pago:
    def __init__(self, id_pago, id_reserva, monto, metodo_pago, fecha_emision):
        self.id_pago= id_pago
        self.id_reserva = id_reserva
        self.monto = monto
        self.metodo_pago = metodo_pago
        self.fecha_emision = fecha_emision