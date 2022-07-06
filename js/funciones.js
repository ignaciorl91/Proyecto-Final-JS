// VARIABLES GLOBALES
// botones
const botonNP = document.getElementById("bNP")
const botonRV = document.getElementById("bRV")
const botonAS = document.getElementById("bAS")
const botonMP = document.getElementById("bMP")
const botonAD = document.getElementById("BAD")
const botonNS = document.getElementById("bNS")

const telementos = document.getElementById("tablaElementos")
const formulario = document.getElementById("formulario")
const form = document.getElementById("form")
const inputNombre = document.getElementById("inputNombre")
const inputCategoria = document.getElementById("inputCategoria")
const inputPrecio = document.getElementById("inputPrecio")
const inputCantidad = document.getElementById("inputCantidad")
const inputImportado = document.getElementById("inputImportado")
const btnCancelar = document.getElementById("cancelarEnvio")


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
    precio: 25400,
    stock: 50,
    importado: false
},
{
    id: 104,
    nombre: "Termo",
    categoria: "Hogar",
    precio: 8500,
    stock: 150,
    importado: true
}
]

// AREA FUNCIONES
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


function elHTML() {
    telementos.innerHTML = ""
    for (elem of ARTICULOS) {
        let fila = document.createElement("tr")
        let check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        check.setAttribute("disable", "")
        if (elem.importado === true) {
            check.setAttribute("checked", "true")
        }
        // let chk = document.createElement("form")
        // chk.append(check)
        fila.innerHTML = `<td>${elem.id}</td> <td>${elem.nombre}</td> <td>${elem.categoria}</td>  <td>${elem.precio}</td> <td>${elem.stock}</td> <td>${check}</td>`
        telementos.append(fila)
        telementos.append(check) //ESTO ESTA ACA PORQUE NO ME FUNCIONA CUANDO LO PONGO EN LA TABLA, PROBE DE VARIAS FORMAS Y NADA
    }
}

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
    elHTML()
}
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
    elHTML()
}
function modificarPrecio() {
    let itN = parseInt(prompt("Id del producto a modificar"))
    if (ARTICULOS.find((it) => it.id === itN)) {
        let art = ARTICULOS.find((it) => it.id === itN)
        art.precio = parseFloat(prompt("Ingrese el nuevo Precio"))
        alert(`El nuevo precio de ${art.nombre} es ${art.precio}`)
    } else {
        alert("Numero de id incorrecto")
    }
    elHTML()
}
    // CON ESTA FUNCION PODEMOS AUMENTAR LOS PRECIOS EN TODOS LOS PRODUCTOS IMPORTADOS DE A CUERDO AL AUMENTO DEL DOLAR
function aumentoDolar(porcentaje) {
    porcentaje = parseFloat(prompt("porcentaje de aumento"))
    ARTICULOS.forEach((it) => {
        if (it.importado === true) {
            it.precio = (it.precio * porcentaje / 100) + it.precio
        }
    })
    elHTML()
}
function productosSinStock() {
    let articulosSinStock = ARTICULOS.filter((it) => it.stock < 1)
    console.log(articulosSinStock)
    if (articulosSinStock.length < 1) {
        alert("No tiene articulos sin stock")
    } else {
        articulosSinStock.forEach((el) =>
            alert(`Le falta stock de  ${el.nombre}`)
        )
    }
    elHTML()
}
function displayFormulario(){
    formulario.style.transform = "translateY(0%)";
    formulario.style.position = "static";
}
function validarFormulario(event){
    event.preventDefault()
    console.log("elemento sumbit")
    let ID = ARTICULOS.length + 101;
    let nombre = inputNombre.value
    let categoria = inputCategoria.value
    let precio = inputPrecio.value
    let cantidad = inputCantidad.value
    let importado = inputImportado.checked

    let producto = new item(ID, nombre, categoria, precio, cantidad, importado)
    ARTICULOS.push(producto)
    formulario.style.transform = "translateY(-500%)";
    formulario.style.position = "fixed";
    elHTML()
}

// EVENTOS
botonNP.addEventListener("click", displayFormulario)  //Otra sintaxis solo por practica
botonRV.onclick = vender
botonAS.onclick = agregarStock
botonMP.onclick = modificarPrecio
botonAD.onclick = aumentoDolar
botonNS.onclick = productosSinStock
btnCancelar.onclick=()=>{
    formulario.style.transform = "translateY(-500%)";
    formulario.style.position = "fixed";
}
form.onsubmit = (event)=> validarFormulario(event)


elHTML()
// displayFormulario()