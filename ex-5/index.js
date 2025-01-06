/*
  Hai un array con i colori delle palline del tuo albero di natale.
  Scrivi una funzione "contaPallineRosse" che conti quante palline rosse ci sono.

  Input:
  const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];

  Output: 3
*/

const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];

let pallineRosse = 0

palline.forEach((pallina) => {
  if(pallina === "rosso"){
    pallineRosse++
  }
})

console.log(pallineRosse)