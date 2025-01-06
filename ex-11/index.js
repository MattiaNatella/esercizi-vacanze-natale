/*
  Hai un array con i nomi dei bambini che devono ricevere un regalo. 
  Scrivi una funzione consegnaRegali che aggiunga "🎁" accanto a ogni nome.

  Input:
    const bambini = ["Renato", "Gino", "Cicibubu"];

  Output:
    ["Renato🎁", "Gino🎁", "Cicibubu🎁"];
*/

const bambini = ["Renato", "Gino", "Cicibubu"];

function consegnaRegali(array){
  const bambiniConRegali = array.map((element) => element + "🎁")
  return bambiniConRegali
}

// const bambiniConRegali = consegnaRegali(bambini)

console.log(consegnaRegali(bambini))