/*
  1. Dato un array di regali, restituisci solo quelli che costano meno di 20 euro.

  Input:
  const regali = [
    { nome: "Macchinona", prezzo: 56 },
    { nome: "Librino", prezzo: 5 },
    { nome: "Giocattolone", prezzo: 25 },
    { nome: "Sedia", prezzo: 15 },
    { nome: "Berretto troppo costoso", prezzo: 58 },
  ];

  Output: [
    { nome: "Macchinona", prezzo: 56 },
    { nome: "Giocattolone", prezzo: 25 },
    { nome: "Berretto troppo costoso", prezzo: 58 },
  ]

  2. Crea una funzione "filtraRegaliEconomici", che dato un array, restituisca quelli che costano meno di 20 euro
*/

const regali = [
  { nome: "Macchinona", prezzo: 56 },
  { nome: "Librino", prezzo: 5 },
  { nome: "Giocattolone", prezzo: 25 },
  { nome: "Sedia", prezzo: 15 },
  { nome: "Berretto troppo costoso", prezzo: 58 },
];

const regaliSotto20Euro = regali.filter(({prezzo}) => prezzo < 20)

console.log(regaliSotto20Euro)

function filtraRegaliEconomici(array){
  const {prezzo} = array
  const arrayFiltrato = array.filter((element) => element.prezzo < 20 )
  return arrayFiltrato
}

console.log(filtraRegaliEconomici(regali))
