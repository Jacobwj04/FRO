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

const showTitle = document.getElementById("js--show-title")
const showSummary = document.getElementById("js--show-summary")

let wizard = fetch("https://api.tvmaze.com/search/shows?q=the%20flash")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const kaas = data[1]
        showTitle.innerHTML = kaas.show.name;
        showSummary.innerHTML = kaas.show.summary;
    });

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function (response) {
                return response.json();
            })
            .then(function (echteData) {
                inputField.style.display = "none";
                nameText.innerHTML = echteData.age;
            });
    }
}



