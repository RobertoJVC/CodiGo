function primeraFuncion(){
    let valor1 = "Valor 1";

//js tiene la propiedad de crear una funcion dentro de otra funcion
    function segundaFuncion(){
        console.log(valor1);

        function terceraFuncion(){
            console.log("tercera funcion", valor1);
        
            function cuartaFuncion(){
                console.log("cuarta funcion", valor1 + "Hola");
            }

            return cuartaFuncion();
        }

        return terceraFuncion();

    }

    return segundaFuncion();
}

primeraFuncion();