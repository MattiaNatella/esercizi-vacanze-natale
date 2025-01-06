/*
  Hai un array con i colori delle palline del tuo albero di natale.
  Conta quante palline ci sono per ogni colore, restituisci un oggetto con il numero totale per ciascun tipo.

  Input:
  const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];

  Output:
  {
    "rosso": 3,
    "blu": 2,
    "verde": 1,
    "giallo": 1
  }
*/



const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];



 const quantiColori = {
   "rosso": contaPalline(palline, "rosso"),
   "blu": contaPalline(palline, "blu"),
   "verde": contaPalline(palline, "verde"),
   "giallo": contaPalline(palline, "giallo")
 }

 console.log(quantiColori)

 function contaPalline(array,colore){
   const quante = array.filter((element) => element === colore).length
   return quante
 }

//soluzione di copilot
//  const contaPalline = (array) => {
//    return array.reduce((acc, colore) => { 
//     acc[colore] = (acc[colore] || 0) + 1; 
//     return acc; 
//    }, {});
//   }; 
   
//    const risultato = contaPalline(palline);
//     console.log(risultato);