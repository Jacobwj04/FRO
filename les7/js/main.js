const labels = [
  'Playstation 2',
  'Gamecube',
  'Nintendo DS',
  'Nintendo Switch',
  'Playstation 4 Pro',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Most played console',
    backgroundColor: ['FF6B6B', '#6BCB77', '#FFD93D', '#4D96FF', '#6EDCD9'],
    data: [10000, 5000, 6000, 1000, 2000,],
  }]
};

const config = {
  type: 'doughnut',
  data: data,
};

const config2 = {
  type:"bar",
  data:data,
};

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);