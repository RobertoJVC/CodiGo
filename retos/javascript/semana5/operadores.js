function aumentaNumber(numero, aumento){
    //operador de adicion
    //numero = numero + aumento;
    numero += aumento;
    numero -= aumento;
    numero *= aumento;
    numero /= numero
    console.log(numero);
}

aumentaNumber(10,20);

console.log("funcion 2");
function aumentoDoble(numero,aumento){
    //exponenciacion
   // numero **= aumento;
    numero %= aumento;
    console.log(numero);
}

aumentoDoble(2,3);
aumentoDoble(8,4);
aumentoDoble(12,2);

function operadorDeCambio(numero1, numero2){
    numero1 <<= numero2;
    // numero1 = numero1 << numero2;
    console.log("operadorDeCambio", numero1);
}

operadorDeCambio(5, 20);

function operadoresLogicos(numero1,numero2){
    console.log(numero1 > numero2);
    console.log(numero1 < numero2);
    console.log(numero1 == numero2);
    console.log("1" == 1);
    console.log("1" === 1);
    console.log(typeof 41.3);
    console.log(typeof "hola");
    console.log(typeof [1,2,3]);
}

operadoresLogicos(100, 50)