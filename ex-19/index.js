/*
  Sfruttano l'api di gerry scotti, stampa in console sue 5 frasi.
  Endpoint API: https://gerry-quotes.fly.dev/quotes/random

  Puoi utilizzare sia fetch che axios per la chiamata AJAX.
*/
const {log} = require('console')
const axios = require('axios')
const { endianness } = require('os')
const Endpoint = "https://gerry-quotes.fly.dev/quotes/random"

function getGerryQuotes(quotes = [], count = 5){

  if(quotes.length === count){
    quotes.forEach((quote) => log(quote))
    return;
  }

  axios.get(Endpoint)
    .then (response => {
      quotes.push(response.data.quote)
      getGerryQuotes(quotes, count)
    })
    .catch(error =>{
      console.error('Errore nel recupero della citazione', error)
    })
  }

  getGerryQuotes()