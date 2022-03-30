const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");

let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed == false) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Pokémon fled!"
            pokemonGamePlayed = true;
        }
        else {
            pokemonText.innerText = "Pokémon Caught!"
            pokemonGamePlayed = true;
        }
    }
}
