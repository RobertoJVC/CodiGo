const live_qty = document.querySelector(".live_qty");

function mostrar(){
    document.getElementById('game').style.display = "block";
}


const pi_decimals= "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let posicion = 0;

let errors = 0;

const input_decimals = document.getElementById("input_decimals");
const result_decimals = document.getElementById("result_decimals");
const result_score = document.getElementById("result_score");

function renderLives() {
    // cada vez que error sea true entonces vamos a disminuir un corazon
    live_qty.innerHTML = "";
    for (let i = 0; i < 5 - errors; i++) {
      // live_qty.innerHTML = live_qty.innerHTML + "❤️";
      live_qty.innerHTML += "❤️";
    }
  }
  
  renderLives();

input_decimals.addEventListener("keyup", function(){
    this.value = "";
    this.focus();
});

input_decimals.addEventListener("keydown", function(evt){
    if (evt.code == "Enter") return;
    const decimal = String.fromCharCode(evt.keyCode);
    if (decimal == "") return;
    if (decimal == " ") return;
    if (isNaN(decimal)) return;

    if (decimal == pi_decimals.charAt(posicion)) {
        result_decimals.innerText += decimal;
        result_decimals.style.color="green";
        posicion++;
        result_score.innerText = posicion;
    }  else {

        errors++;
        result_decimals.style.color="red";
        renderLives();
        if(errors === 5){
            input_decimals.disabled=true;
        }
    }

    setTimeout(() => {
        result_decimals.style.color = "black";
      }, 500);

    //console.log(decimal);   
});