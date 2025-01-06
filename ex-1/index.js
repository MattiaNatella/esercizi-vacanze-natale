/*
 Scrivi una funzione "trovaBabboNatale" che, dato un array di nomi, 
 restituisca "Babbo Natale trovato!" se il nome "Babbo Natale" è presente, 
 altrimenti "Babbo Natale non trovato".

 Input: ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"]
 Output: "Babbo Natale trovato!";
*/

const people = ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"];



function trovaBabboNatale(array){
    array.includes('Babbo Natale') ? console.log("Babbo Natale trovato") : console.log("Babbo Natale non trovato");
    
}

trovaBabboNatale(people)