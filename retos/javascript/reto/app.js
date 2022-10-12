
const container = document.querySelector(".container");
const url = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";


async function getMovies(){
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const generos = data.Search;
    console.log(generos);

    container.innerHTML="";
    generos.forEach((genero) => {
        container.innerHTML += 
        `<div class="movie">
        <img src="${genero.Poster}" alt="" />
        <h4>${genero.Title}</h4>
        <p>
          ${genero.Year}
        </p>
        <p>
          ${genero.Type}
        </p>
      </div>`;
    });

}

getMovies();

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(
       //   index + (Math.random() * 10).toFixed(0)
       // ).replace("0", "")}.svg