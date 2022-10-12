let n3 = 30;

function sumar (){
    let n1 = 10;
    let n2 = 20;
    console.log(n1 + n2 + n3);
}

//console.log(n1);
console.log(n3);
let nombre = "roberto";

function restar(n1,n2) {
    console.log(n1 - n2);

}

//los valores entre parentesis de la funcion reciben 2 argumentos que son n1,n2
//esta funcion cuando es creada solo es ejecutada cuando se le llame.

restar(10, 50);
restar(90, 100);
restar(120, 30);

function saludar (nombre){
    console.log("Hola me llamo " + nombre)
}

saludar("roberto");
saludar("juan");

//funciones return
function entrarafiesta(edad){
    //si es mayor a 18 ingresa, si no no ingresa.
    let resultado = false;
    if (edad >= 18) {
        //return significa que si la condicion se cumple el valor que retorne sera true
        resultado = true;
        
    }

    return resultado;
}

const validacionedad = entrarafiesta(18);
console.log("validacion de edad", validacionedad);

