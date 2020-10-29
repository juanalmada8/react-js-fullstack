var productos = [
{
nombre: "Harina" ,
precio: 35
},
{
nombre: "Pan" ,
precio: 25
},
{
nombre: "Papa" ,
precio: 52
},
{
nombre: "Palta" ,
precio: 55
},
{
nombre: "Fideos" ,
precio: 85
},
{
nombre: "Aceite" ,
precio: 350
},
{
nombre: "Sopa" ,
precio: 86
},
{
nombre: "Mermelada" ,
precio: 108
},
{
nombre: "Porotos" ,
precio: 69
},
{
nombre: "Lentejas" ,
precio: 85
},
{
nombre: "Mandarina" ,
precio: 43
},
{
nombre: "Banana" ,
precio: 79
},
{
nombre: "Leche de almendras" ,
precio: 145
},
{
nombre: "Papel higiénico" ,
precio: 147
},
{
nombre: "Lavandina" ,
precio: 55
},
{
nombre: "Alcohol en gel" ,
precio: 123
},
{
nombre: "Shampoo" ,
precio: 400
},
{
nombre: "Arroz" ,
precio: 66
},
{
nombre: "Huevo" ,
precio: 35
},
{
nombre: "Salsa de tomate" ,
precio: 35
},
]


var carrito = []
var total = 0

function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea la cabecera

  var fila = document.createElement("tr");

  var cabecera = document.createElement("th");
  var textoCelda = document.createTextNode("Nombre")
  cabecera.appendChild(textoCelda)
  fila.appendChild(cabecera);

  var cabecera = document.createElement("th");
  var textoCelda = document.createTextNode("Precio")
  cabecera.appendChild(textoCelda)
  fila.appendChild(cabecera);

  tblBody.appendChild(fila);

  tabla.appendChild(tblBody);

  // Crea las celdas
  for (var i = 0; i < productos.length; i++) {
    // Crea las filas de la tabla
    var fila = document.createElement("tr");
    
    //funcion que guarda los productos y el total de lo que se va comprando
    fila.onclick = function(e) {
      
      window.carrito.push(window.productos[e.target.id].nombre);
      total+=window.productos[e.target.id].precio;
      console.log(carrito)    
      console.log(total)  
      }
    
    for (var j = 0; j < 2; j++) {  
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la fila de la tabla
      if (j==0) {
        var celda = document.createElement("td");
        celda.id = i;
        var textoCelda = document.createTextNode(productos[i].nombre)
        celda.appendChild(textoCelda)
        fila.appendChild(celda);
      }else
       if (j==1) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("$"+productos[i].precio)
        celda.appendChild(textoCelda)
        fila.appendChild(celda);
      }
    }
 
    // agrega la fila al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(fila);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}

//funcion que describe el estado del carrito
function estadoCarrito(click) {
  const estado=document.querySelector("p")
  if ((click=="comprar") && (carrito).length >= 1){
      estado.textContent="Los productos comprados son: "+carrito+ ". El total a pagar es de $"+total
  } else if (click=="cancelar"){
      estado.textContent="No has comprado nada"
  }

}
//funcion comprar
function comprar(){
  estadoCarrito("comprar")
}
//funcion que borra todo lo guardado en el carro. Simil comenzar de cero.
function cancelar(){
    total=0;
    carrito=[];
    estadoCarrito("cancelar")

  // para verificar por consola
  console.log(total);
  console.log(carrito);
};