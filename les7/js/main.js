function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  if(min < 10) {
    min =  '0' + min;
  }

  if(hrs < 10) {
    hrs =  '0' + hrs;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
}

setInterval(displayTime, 10)

function getPokemon() {
  let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0,
    psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

  const label = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric',
    'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'];

  for (i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 500 + 1);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        switch (pokemon.types[0].type.name) {
          case 'normal':
            normal = normal + 1;
            break;
          case 'fighting':
            fighting = fighting + 1
          case 'flying':
            flying = flying + 1;
            break;
          case 'poison':
            poison = poison + 1;
            break;
          case 'ground':
            ground = ground + 1;
            break;
          case 'rock':
            rock = rock + 1;
            break;
          case 'bug':
            bug = bug + 1;
            break;
          case 'ghost':
            ghost = ghost + 1;
            break;
          case 'steel':
            steel = steel + 1;
            break;
          case 'fire':
            fire = fire + 1;
            break;
          case 'water':
            water = water + 1;
            break;
          case 'grass':
            grass = grass + 1;
            break;
          case 'electric':
            electric = electric + 1;
            break;
          case 'psychic':
            psychic = psychic + 1;
            break;
          case 'ice':
            ice = ice + 1;
            break;
          case 'dragon':
            dragon = dragon + 1;
            break;
          case 'dark':
            dark = dark + 1;
            break;
          case 'fairy':
            fairy = fairy + 1;
            break;
          case 'unknown':
            unknown = unknown + 1;
            break;
          case 'shadow':
            shadow = shadow + 1;
            break;
        }
      }).then(function(){
          dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, 
            bug, ghost, steel, fire, water, grass, electric, psychic, 
            ice, dragon, dark, fairy, unknown, shadow];
          graph.update();
      });
  }
  const dataPokemon = {
    labels: label,
    datasets: [
      {
        label: "Pokemon types",
        data: [normal, fighting, flying, poison, ground, rock, 
        bug, ghost, steel, fire, water, grass, electric, psychic, 
        ice, dragon, dark, fairy, unknown, shadow],
        backgroundColor: ['#FF6B6B', '#6BCB77', '#FFD93D', '#4D96FF', '#6EDCD9'],
      }
    ]
  }
  
  const configPokemon = {
    type: "bar",
    data: dataPokemon,
  }
  
  const graph =  new Chart(document.getElementById("js--chart--2"), configPokemon);

};


getPokemon();


let json_data = fetch("js/data.json")
.then(function (response) {
  return response.json();
})
.then(function (json_data) {
  const data3 = {
    labels: json_data.chart3_label,
    datasets: [{
      label: 'Most played console',
      backgroundColor: ['#FF6B6B', '#6BCB77', '#FFD93D', '#4D96FF', '#6EDCD9'],
      borderColor: ["#eeeee"],
      data: json_data.chart3_data,
    }]
  };
  
  const config3 = {
    type: 'pie',
    data: data3,
  };
  
  new Chart(document.getElementById("js--chart--3"), config3);
  const data1 = {
    labels: json_data.chart1_label,
    datasets: [{
      label: 'Most played console',
      backgroundColor: ['#FF6B6B', '#6BCB77', '#FFD93D', '#4D96FF', '#6EDCD9'],
      borderColor: ["#eeeee"],
      data: json_data.chart1_data,
    }]
  };
  
  const config1 = {
    type: 'doughnut',
    data: data1,
  };
  
  new Chart(document.getElementById("js--chart--1"), config1);
})
