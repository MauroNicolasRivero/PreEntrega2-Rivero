class venta {
    constructor(pedido) {
        this.carrito = pedido
    }
    calcularSubtotal() {
        if (this.carrito.length > 0) { 
            return this.carrito.reduce((acc, hamburguesa)=> acc + hamburguesa.precio, 0)
        }
    }
}