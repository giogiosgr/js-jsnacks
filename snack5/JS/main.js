'use strict';

//creazione array
const oddNumbers = [];

//inizializzazione variabile che conterrà l'input dell'utente
let inputNumber = 0;

//ciclo con 6 iterazioni
for (let i = 1; i <= 6; i++) {
    //input dell'utente convertito in Number
    inputNumber = Number(prompt(`Inserisci il ${i}° numero di 6`));
    //se non viene inserito un input corretto (not a number, null, o input vuoto) viene mostrato un alert
    if (isNaN(inputNumber) || inputNumber <= 0) {
        alert("Attenzione, l'ultimo input non era valido e non sarà considerato");
        //quindi l'input stesso viene reso un valore nullo
        inputNumber = null;
    }
    //check che il numero sia dispari tramite modulo, con inserimento in array nel caso
    if ((inputNumber % 2) != 0) {
        oddNumbers.push(inputNumber);
    }
}

//stampa dell'array in console, ma se è vuoto viene stampato un messaggio specifico
if (oddNumbers.length === 0) {
    console.log("Spiacente, ma non hai alcun elemento nell'array")
}
else {
    console.log("L'array risultato è il seguente:");
    console.log(oddNumbers);
}