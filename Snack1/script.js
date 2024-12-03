const bikes = [
  {
    nome: 'Cinelli',
    peso: 4.5
  },
  {
    nome: 'Olmo',
    peso: 7.8
  },
  {
    nome: 'Sprunk',
    peso: 8.9
  },
  {
    nome: 'Willer',
    peso: 6.3
  },
  {
    nome: 'Bassy',
    peso: 7.2
  },
]

let lighterBike = bikes[0]

for(let bike of bikes){
  console.log(bike)
  if(bike.peso < lighterBike.peso){
    lighterBike = bike;
  }
}
console.log(lighterBike)
