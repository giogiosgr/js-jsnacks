'use strict';

//creaiamo l'array con la lista degli invitati (elementi di tipo string)
const invitati = ["aldo", "giovanni", "giacomo"];

//chiediamo il nome all'utente, inizializzando una variabile dedicata
const nome = prompt("come ti chiami?");

//con il metodo includes dell'oggetto array verifichiamo se il nome è incluso
if (invitati.includes(nome)) {
    console.log("benvenuto");
}
else {
    console.log("non sei invitato");
}
