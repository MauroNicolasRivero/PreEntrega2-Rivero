const carrito = []
const cuotasSinInteres = 3

function buscarHamburguesas(codigo) {
    let resultado = hamburguesas.find((hamburguesa)=> hamburguesa.codigo === parseInt(codigo) )
    return resultado
}

function finalizarVenta() {
    const cena = new venta(carrito)
    console.log("El costo total de tu pedido es de $ " + cena.calcularSubtotal())
    mostrarCuotasSinIntereses()
}

function mostrarCuotasSinIntereses() {
    console.log("PAGANDO CON TARJETA DE CREDITO MASTERCARD, TODOS NUESTROS ARTÍCULOS TIENEN 👇")
    for(let i = 0; i < cuotasSinInteres; i++) {
        console.log((i + 1) + " cuotas sin interés.")
    }
        console.warn("CONSULTA NUESTRAS PROMOCIONES POR PAGO EN EFECTIVO!")
}

function venderProductos() {
    let codigo = prompt("Ingresa el código de la hamburguesa elegida")
    let hamburguesaSeleccionada = buscarHamburguesas(codigo)
    if (hamburguesaSeleccionada !== undefined) {
        carrito.push(hamburguesaSeleccionada)
        alert(hamburguesaSeleccionada.tipo + " se agregó al carrito.")
        let respuesta = confirm("¿Deseas pedir otra Hamburguesa?")
        if (respuesta === true) {
            venderProductos()
        } else {
            finalizarVenta()
            alert("Gracias por vistar nuestra App. Ojalá vuelvas pronto!!!")
        } 
    } else {
        alert("Error en el código ingresado. Refresca la página para comenzar de nuevo.")
    }
}
function ventaCompleta () {
    alert("Bienvenid@ nuevamente!!!. Ya sabes que vas a ordenar?")
    venderProductos()
}

ventaCompleta()