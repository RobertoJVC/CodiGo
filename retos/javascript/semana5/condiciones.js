function validarComoIrAEstudiar (hora,dinero){
    if (hora === "6:00 am"){
        //me levante temprano. puedo tomar desayuno
        console.log("tomo desayuno");

        if (dinero > 20){
            console.log("tomo colectivo");
        } else if (dinero > 10){
            console.log("tomo corredor");
        }else{
            console.log("tomo el chino");
        }
        console.log("llego a estudiar");

    } else if (hora === "7:00 am") {
        console.log("no tomo desayuno");

        if(dinero){
            console.log("tomo el corredor");
        }
        console.log("llego a estudiar");
    } else{
    console.log("NO Tomo desayuno");
    console.log("Tomo colectivo");
    console.log("Llego a estudiar");
    }

}

console.log("Caso 1");
validarComoIrAEstudiar("6:00 am", 10);
console.log("Caso 2");
validarComoIrAEstudiar("6:00 am", 15);
console.log("Caso 3");
validarComoIrAEstudiar("8:00 am", 15);

function validarUsandoOperadores(username, password) {
    //&& and 
    //|| or
    if(username === "roberto" && password === "123456"){
        console.log("ingreso");
    }else{
        console.log("datos invalidos");
    }
    if(username === "roberto" || password === "123456"){
        console.log("ingreso");
    }else{
        console.log("datos invalidos");
    }
}

validarUsandoOperadores("roberto","123456");
validarUsandoOperadores("roberto1","123456");
validarUsandoOperadores("roberto1","12456");
