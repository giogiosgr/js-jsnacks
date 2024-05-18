'use strict';

/*
Per la logica, ho pensato di integrare un array, ma di non usare un array che contenga ogni cifra inserita fino all'ipotetica 
fine della memoria, ma permettere che teoricamente il programma possa continuare all'infinito finché non si inseriscono 
due numeri uguali (o input non valido). Quindi ho usato un array di lunghezza due che permetta il confronto 
unicamente tra le ultime due cifre inserite, memorizzando man mano l'input nella prima o nella seconda posizione, 
a seconda se il contatore del ciclo sia pari o dispari (resto del modulo con il 2). Avremo così l'indice dell'array
nell'espressione di assegnazione del valore di input per ogni iterazione.
*/

//inizializzazione dell'array di lunghezza 2
const numbers = [0, 0];

//inizializzazione della variabile per l'input dell'utente
let inputNumber = 0;

//ciclo for da cui usciremo soltanto grazie ai break
for (let i = 0; ; i++) {
    inputNumber = prompt("Inserisci un numero:");
    //condizione di controllo, esclude soltanto i non numeri e il campo lasciato vuoto, uscendo dal ciclo
    console.log(inputNumber);
    if (isNaN(inputNumber) || inputNumber == 0) {
        alert("Attenzione, hai inserito un input non valido, il programma sarà terminato");
        break;
    }
    //permettiamo all'utente di uscire senza messaggio nel caso prema Annulla
    if (inputNumber === null) {
        break;
    }
    //a seconda se il contatore è pari o dispari, sappiamo dove inserire l'ultimo numero, convertito in Number
    numbers[i % 2] = +inputNumber;
    //controllo quindi che le ultime due cifre inserite siano equivalenti, 
    //in tal caso usciremo dal ciclo con un messaggio dedicato (drammatico)
    if (numbers[0] === numbers[1]) {
        alert("Complimenti, hai spezzato la maledizione dei numeri senza fine!");
        break;
    }
}