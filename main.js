
const productos = [
    {id: 01, nombre:"Rascador Arbol", precio: 1000, cantidad: 2},
    {id: 02, nombre:"Rascador Cactus", precio: 800, cantidad: 1},
    {id: 03, nombre:"Rascador En U", precio: 500, cantidad: 2},
    {id: 04, nombre:"Rascador En T", precio: 550, cantidad: 3},
    {id: 05, nombre:"Rascador Honguito", precio: 1100, cantidad: 1},

    
];

/*
console.log(productos[0].precio);
console.log(productos[1].precio);
console.log(productos[2].precio);
console.log(productos[3].precio);
console.log(productos[4].precio);
*/

let CantidadRascadorArbol = 0;
let CantidadRascadorCactus = 0;
let CantidadRascadorEnU = 0;
let CantidadRascadorEnT = 0;
let CantidadRascadorHonguito = 0;


let compraProducto = prompt("Escriba el número correspondiente al producto que desea comprar o X, para salir.\n Para Rascador Arbol escriba 01\n Para Rascador Cactus escriba 02. \n Para Rascador En U escriba 03\n Rascador En T escriba 04 \n Para Rascador Honguito escriba 05");

while(compraProducto != "X"){
    switch(compraProducto){
        case "01":
            CantidadRascadorArbol = prompt(`Usted quiere comprar el producto número ${compraProducto}, por favor indique la cantidad`);
            console.log("Cantidad Rascador Arbol:" + CantidadRascadorArbol);
            
            break;

        case "02":
            CantidadRascadorCactus = prompt(`Usted quiere comprar el producto número ${compraProducto}, por favor indique la cantidad`);
            console.log("Cantidad Rascador Cactus:" + CantidadRascadorCactus);
            break;

        case "03":
            CantidadRascadorEnU = prompt(`Usted quiere comprar el producto número ${compraProducto}, por favor indique la cantidad`);
            console.log("Cantidad Rascador En U:" + CantidadRascadorEnU);
            break;

        case "04": 
            CantidadRascadorEnT = prompt(`Usted quiere comprar el producto número ${compraProducto}, por favor indique la cantidad`);
            console.log("Cantidad Rascador En T:" + CantidadRascadorEnT);
            break;

        case "05":
            CantidadRascadorHonguito = prompt(`Usted quiere comprar el producto número ${compraProducto}, por favor indique la cantidad`);
            console.log("Cantidad Rascador honguito:" + CantidadRascadorHonguito);
            break;

        default:
            prompt("Selección inválida. ¿Desea otro producto?");

    }
    
    compraProducto = prompt("desea otro producto");

}

/*
console.log("ELEGISTE ESTO 01:" + CantidadRascadorArbol);
console.log("ELEGISTE ESTO 02:" + CantidadRascadorCactus);
console.log("ELEGISTE ESTO 03:" + CantidadRascadorEnU);
console.log("ELEGISTE ESTO 04:" + CantidadRascadorEnT);
console.log("ELEGISTE ESTO 05:" + CantidadRascadorHonguito);
*/

const suma = (a, b, c, d, e) => a + b + c + d + e;


let precio = suma(((productos[0].precio) * CantidadRascadorArbol), ((productos[1].precio) * CantidadRascadorCactus), ((productos[2].precio) * CantidadRascadorEnU), ((productos[3].precio) * CantidadRascadorEnT), ((productos[4].precio) * CantidadRascadorHonguito));
console.log(precio);

prompt(`El total de su compra es ${precio} pesos`);

let cupon = prompt(`Si tiene descuento, ingrese el código, de lo contrario escriba X`);

    if(cupon === "qpon"){
        const preciosProductoConDescuento = productos.map((item) => {
            return {
                id: item.id,
                nombre: item.nombre,
                precio: item.precio - item.precio / 10,
                cantidad: item.cantidad,
        
            };
        
        });
        //console.log(preciosProductoConDescuento[0].precio);

        const suma = (a, b, c, d, e) => a + b + c + d + e;
        let precio = suma(((preciosProductoConDescuento[0].precio) * CantidadRascadorArbol), ((preciosProductoConDescuento[1].precio) * CantidadRascadorCactus), ((preciosProductoConDescuento[2].precio) * CantidadRascadorEnU), ((preciosProductoConDescuento[3].precio) * CantidadRascadorEnT), ((preciosProductoConDescuento[4].precio) * CantidadRascadorHonguito)); console.log(precio);

        prompt(`El total de su compra es ${precio} pesos`);  


    }else if(cupon != "X"){    
            prompt(`Código inválido`);
    }else{
        prompt(`Gracias por su compra`);
    };



