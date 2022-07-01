jQuery(document).ready(listo);

class item {
    constructor(id, nombre, categoria, precio, stock, importado) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.importado = importado;
    }
}
const ARTICULOS = [{
        id: 101,
        nombre: "Cable",
        categoria: "ferreteria",
        precio: 300,
        stock: 500,
        importado: true

    },
    {
        id: 102,
        nombre: "Pala",
        categoria: "ferreteria",
        precio: 3000,
        stock: 10,
        importado: true
    },
    {
        id: 103,
        nombre: "Parrilla",
        categoria: "Patio",
        precio: 5400,
        stock: 50,
        importado: false
    }
]
function listo(){
// agregar Item 
jQuery("#bNP").click(
function nuevoItem() {
    let it = new item(
        ARTICULOS.length + 101,
        prompt("Nombre del producto"),
        prompt("Categoria"),
        parseFloat(prompt("Ingrese el precio de venta")),
        parseInt(prompt("Ingrese cantidad de unidades"))
    )
    ARTICULOS.push(it)
    console.log(ARTICULOS)
})
jQuery("#bRV").click(
function vender() {
    let itN = parseInt(prompt("Ingrese el numero de Item vendido"))
    if (ARTICULOS.find((el) => el.id === itN)) {
        let cant = parseInt(prompt("Ingrese la cantidad vendida"))
        let art = ARTICULOS.find((el) => el.id === itN)
        art.stock -= cant
        alert(`Quedan es stock de  ${art.nombre} ${art.stock} unidades`)
    } else {
        alert("No existe ningun item con ID " + itN)
    }
    console.log(ARTICULOS)
})

jQuery("#bAS").click(
function agregarStock() {
    let itN = parseInt(prompt("Ingrese el numero de Item a agregar"))
    if (ARTICULOS.find((el) => el.id === itN)) {
        let cant = parseInt(prompt("Ingrese la cantidad a agregar"))
        let art = ARTICULOS.find((el) => el.id === itN)
        art.stock += cant
        alert(`Quedan es stock de  ${art.nombre} ${art.stock} unidades`)
    } else {
        alert("No existe ningun item con ID " + itN)
    }
    console.log(ARTICULOS)
}
)
jQuery("#bMP").click(
function modificarPrecio() {
    let itN = parseInt(prompt("Id del producto a modificar"))
    if (ARTICULOS.find((it) => it.id === itN)) {
        let art = ARTICULOS.find((it) => it.id === itN)
        art.precio = parseFloat(prompt("Ingrese el nuevo Precio"))
        alert(`El nuevo precio de ${art.nombre} es ${art.precio}`)
    } else {
        alert("Numero de id incorrecto")
    }
})
jQuery("#BAD").click(
// CON ESTA FUNCION PODEMOS AUMENTAR LOS PRECIOS EN TODOS LOS PRODUCTOS IMPORTADOS DE A CUERDO AL AUMENTO DEL DOLAR
function aumentoDolar(porcentaje) {
    ARTICULOS.forEach((it) =>{
        if (it.importado ===true){
                it.precio = (it.precio * porcentaje / 100) + it.precio
            }
    })
}
)
jQuery("#bNS").click(
function productosSinStock() {
    let articulosSinStock = ARTICULOS.filter((it)=>it.stock<1)
    console.log(articulosSinStock)
})
// modificarPrecio()
// vender()
// nuevoItem()
console.log(ARTICULOS)
// productosSinStock()


}


