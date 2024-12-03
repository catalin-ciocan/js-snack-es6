const Gruppo = ['Sale', 'Zucchero', 'Acqua', 'Pane', 'Pepe', 'Pasta', 'Torta' ];
const a = 1;
const b = 4;

const nuovoGruppo = (array, num1, num2) => array.slice(num1,num2 + 1);

console.log(nuovoGruppo(Gruppo, a, b))