const nombres = ["Pepe", "Juan", "Luisa", "Maria", "Carlos"];
//hay 5 datos almacenados en el arreglo
console.log(nombres[0]); //Pepe
console.log(nombres[3]); //Maria
console.log(nombres[5]); //undefined fuera del arreglo


let edades = [18, 20, 22, 12];
console.log(edades);

const booleanos = [true, false, true, false];

//funciones de arrays
//funcion para agregar un elemento push (ingresar un SOLO valor al array, incluyendo array de array)
edades.push(34);
edades.push("Pepe");
edades.push(true);
edades.push(["Juan","Luis"]);
console.log("Edades 2", edades);
console.log(edades[7],[0]);

//arrays multiples

const cursos = [["React","Angular","Svelt","Vue"],
                ["Laravel","Sinfony","Cake",["poo", "java", "php", ["js","css","html"]]],
                ["Spring","Jhipster"]];

console.log(cursos[1][3][3][1]);

cursos.unshift("React Native");
console.log("unshift", cursos);
cursos[1].unshift("Nextjs");
console.log("Nextjs", cursos);

console.log("Pop");
const valorEliminado = cursos.pop();
//pop elimina el ultimo elemento del array
console.log(valorEliminado);
console.log(cursos);


console.shift("Shift");
const valorEliminado2 = cursos.shift();
//pop elimina el primer elemento del array
console.log(valorEliminado2);
console.log(cursos);

//for: bucle repetitivo
const newCursos = ["angular", "react", "vue", "svelt"];
for (let i = 0; i < cursos.length; i++){

    console.log(newCursos[i]);
}

console.log("=======forEach=========");
// Como seria la forma moderna
// Foreach va a recorrer el arreglo pero no retorna ni un valor
// necesita de una funcion que obtenga su valor en cada vuelta
newCursos.forEach(function (element, indice) {
  console.log(element, indice); // Angular, 0
});

console.log("=======forEach=========");
// Como seria la forma moderna
// Foreach va a recorrer el arreglo pero no retorna ni un valor
// necesita de una funcion que obtenga su valor en cada vuelta
newCursos.forEach(function (curso, indice) {
  if (curso === "React") {
    console.log(curso, indice);
  }
});

const numeros = [10, 11, 12, 13, 14, 15];

for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]); // 10, 11, 12, 13, 14
  if (numeros[j] > 13) {
    // Es basicamente para romper una funcion, este caso estamos rompinedo al for
    break;
  }
}
console.log("Foreach numeros");
numeros.forEach(function (numero) {
  console.log(numero); // 10, 11, 12, 13, 14, 15
  if (numero > 13) {
    // Es basicamente para romper una funcion, este caso estamos rompinedo al for
    return;
  }
  // un forEach tiene la peculiardidad de que no se puede romper
});

