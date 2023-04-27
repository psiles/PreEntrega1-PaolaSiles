
let RascadorArbol = 1000;
let RascadorCactus = 800;
let RascadorEnU = 500;
let RascadorEnT = 550;
let RascadorHonguito = 1100;


let CantidadRascadorArbol = 0;
let CantidadRascadorCactus = 0;
let CantidadRascadorEnU = 0;
let CantidadRascadorEnT = 0;
let CantidadRascadorHonguito = 0;

//let total = 0;
//const suma = (a, b) => {return total + (a * b)};


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

console.log("ELEGISTE ESTO 01:" + CantidadRascadorArbol);
console.log("ELEGISTE ESTO 02:" + CantidadRascadorCactus);
console.log("ELEGISTE ESTO 03:" + CantidadRascadorEnU);
console.log("ELEGISTE ESTO 04:" + CantidadRascadorEnT);
console.log("ELEGISTE ESTO 05:" + CantidadRascadorHonguito);

const suma = (a, b, c, d, e) => a + b + c + d + e;


let precio = suma((RascadorArbol * CantidadRascadorArbol), (RascadorCactus * CantidadRascadorCactus), (RascadorEnU * CantidadRascadorEnU), (RascadorEnT * CantidadRascadorEnT), (RascadorHonguito * CantidadRascadorHonguito));
console.log(precio);

prompt(`El total de su compra es ${precio} pesos`);