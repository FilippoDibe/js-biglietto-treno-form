// dichiarazione varibili 
var eta="";
var Km="";
var name = "";
let prezzoSconto = '';


// prendere tutti i dati del form inseriti dall'utente
    document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Ottieni il valore dell'input
    var eta = document.getElementById("numeroEta").value;
    var Km = document.getElementById("numeroKm").value;

    document.querySelector('.biglietto-contain').style.display = 'block';

    // Fai qualcosa con il valore (ad esempio, stampalo nella console)
    // calcolo il prezzo del bigletto 
    const prezzoBase = (Km * 0.21);

// sconti 
if (eta <= 18){
    // se il passeggiero ha un eta compresa tra i 0 18 avra uno sconto del 20 %
    const sconto =((prezzoBase * 20) / 100);
    prezzoSconto = (prezzoBase - sconto);
    console.log(prezzoSconto);
    // biglietto 
    document.getElementById('offerta').innerHTML = 'Biglietto MInorenne'

    document.getElementById('costo').innerHTML = prezzoSconto.toFixed(2)+'€';

    // document.getElementById("risultato").innerHTML = prezzoSconto.toFixed(2);

} else if ( eta >= 65){
    // se il passeggiero ha un eta >65 avra uno sconto del 40%
    const sconto = ((prezzoBase * 40) / 100);
    prezzoSconto = (prezzoBase - sconto);
    // bigletto 
    document.getElementById('offerta').innerHTML = 'Biglietto Over'
    document.getElementById('costo').innerHTML = prezzoSconto.toFixed(2)+'€';


    console.log(prezzoSconto);

    // document.getElementById("risultato").innerHTML = prezzoSconto.toFixed(2);

} else {
    // se il passeggiero ha un eta >18 ma  <65 nessuno sconto 
    prezzoSconto = prezzoBase;
    // biglietto
    document.getElementById('offerta').innerHTML = 'Biglietto Maggiorenne'
    document.getElementById('costo').innerHTML = prezzoSconto.toFixed(2)+'€';


    // document.getElementById("risultato").innerHTML = prezzoSconto.toFixed(2);
    console.log(prezzoSconto);
}   

});
// funzione del bottone cancella 
function clear(){
    // cancellare il form 
    document.getElementById("numeroEta").value = "";
    document.getElementById("numeroKm").value = "";
    document.getElementById("nome").value = "";
    // cancellare il bigletto 
    document.querySelector('.biglietto-contain').style.display = 'none';
}
document.getElementById("cancel").addEventListener("click", function() {
    clear(); 
});




