document.getElementById('div_container').innerText = "Hola a Todos";
document.getElementById('div_container').style.fontSize = "40px";

function text(){
    document.getElementById('div_container').classList.add('big');
    
}

function remove(){
    document.getElementById('div_container').classList.remove('big');
    
}

const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

const ArrayParrafo = document.querySelectorAll("p");
console.log(ArrayParrafo);
ArrayParrafo.forEach((p) => {
    p.onclick = function(){
        p.innerText="roberto";
        p.classList.add("big");
    }
    //p.innerText = "Roberto";//
   // console.log(p.id); //

}
);

const nombre = document.getElementById('input_name');

nombre.addEventListener("keyup", function(evento_keyup){
    const text = nombre.value;
    
    console.log("Key:", evento_keyup.key);
    console.log("Code:", evento_keyup.code);
    //ArrayParrafo.forEach((p) => {
        //p.onclick = function(){
           // p.innerText = text;
       // }
        //p.innerText = "Roberto";//
       // console.log(p.id); //
    
  //  });
});

