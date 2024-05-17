'use strict';

/* Questa parte stampa l'intera tabellina del 2, ma la tengo sotto commento

for (let i = 2; i <= 1000; i += 2) {
    console.log(i)
}
*/

//variabile con il limite deciso dall'utente, da cui estraiamo l'intero
const range = parseInt(prompt("Inserisci la cifra fino alla quale stampate la tabellina del 2"));
//condizione di controllo dell'input. Se non è un numero compreso tra 2 e 1000, la pagina viene ricaricata
if (isNaN(range) || range < 2 || range > 1000) {
    alert("Attenzione, hai inserito un input non valido");
    document.location.reload();
}

//ciclo per la stampa fino al limite deciso dall'utente
for (let i = 2; i <= range; i += 2) {
    console.log(i)
}

