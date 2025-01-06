/*
  Scrivi una funzione "generaListaDesideri" che prenda un array con desideri duplicati e 
  restituisca una lista con i desideri unici.

  Input:
    const desideri = ["bicicletta", "pupazzo", "bicicletta", "cane"];
  
  Output: 
    ["bicicletta", "pupazzo", "cane"]
*/

const desideri = ["bicicletta", "pupazzo", "bicicletta", "cane"];

function generaListaDesideri(array){
 let desideriUnici = []
 array.forEach((element)=>{
  if(!(desideriUnici.includes(element))){
    desideriUnici.push(element)
  }
 })
 return desideriUnici
}

console.log(generaListaDesideri(desideri))