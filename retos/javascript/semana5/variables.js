var n1 = 1; //number
n1 = "hola"; //string
var n2 = 10;

//var ya no se usa
//var es global
//var es reasignable
//var es pesado
var n1 = true;

//actualmente no se recomienda usar var

//let solo funciona en un scope : ambito

let nombre = "roberto";

nombre = 10;
nombre = true;

console.log("Hola esta es una variable");
console.log(n1 + nombre);
console.log(nombre)

//const no se puede reasignar
const nombre3 = "roberto"
nombre3 = "saida"
//en const no se puede reasignar la variable !inmutabilidad