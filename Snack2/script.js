const squadre = [
  {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Roma', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0},
]

for(let squadra of squadre){
  squadra.puntiFatti = getRandomNumber(0,50)
  squadra.falliSubiti = getRandomNumber(0,50)
}


const nuoveSquadre = []

for(let squadra of squadre){
  const nuovaSquadra = {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  }
  nuoveSquadre.push(nuovaSquadra)
  console.log(squadra)
}
console.log(nuoveSquadre);

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}