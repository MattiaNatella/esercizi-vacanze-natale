/*
  Il nostro albero di natale deve avere una quantità di addobbi bilanciata. 
  Devono esserci tante stelle quante palline.
  Dato un array con più "pallina" e "stella", scrivi una funzione "bilanciaAlbero"
  che ritorni un array con lo stesso numero di "pallina" e "stella".
  La funzione non puà rimuovere elementi, ma solo aggiungerne.

  Input:
    const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella"];

  Output:
    ["pallina", "pallina", "pallina", "stella", "stella", "stella"] 
    (aggiunte due "stella" per bilanciare il numero di addobbi)

  -----------

  Input:
    const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella", "stella", "stella"];

  Output:
    ["pallina", "pallina", "pallina", "stella", "stella", "stella"]; 
    (In questo caso restituisce l'array immutato, perchè ci sono lo stesso numero di "pallina" e "stella")
*/

const addobbiSuAlbero = ["pallina", "stella", "stella"];


function èNegativo(numero){
  return numero < 0
}

function bilanciaAlbero(array){
  let palline = []
  let stelle = []
  array.forEach((element) => element === "pallina" ? palline.push(element) : stelle.push(element))
  let sottrazione = palline.length - stelle.length
  if(èNegativo(sottrazione)){
    for(let i = 0; i < Math.abs(sottrazione); i++){
      array.push("pallina")
    }
  } else {
    for(let i = 0; i < sottrazione; i++){
      array.push("stella")
    }
  }
  return array
}

console.log(bilanciaAlbero(addobbiSuAlbero))

/*

soluzione copilot

function bilanciaAlbero(addobbi) {
 const countPalline = addobbi.filter(addobbo => addobbo === "pallina").length; 
 const countStelle = addobbi.filter(addobbo => addobbo === "stella").length;

  while (countPalline > countStelle) {
   addobbi.push("stella");
   countStelle++;
  } 
    
  while (countStelle > countPalline) { 
   addobbi.push("pallina"); 
   countPalline++; 
   } 
return addobbi; 
}
*/