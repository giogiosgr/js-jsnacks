'use strict';

//PERSONALE VARIAZIONE DELL'ESERCIZIO
//L'utente ha tre tentativi invece di uno

//inizializzo variabile che conterrà l'input utente
let guess = 0;

//inizializzo variabile che conterrà il numero generato randomicamente
let randomNumber = Math.floor(Math.random() * 10) + 1;

//variabile booleana che conserverà l'informazione di vincita o meno
let win = false;

//ciclo for per i tre tentativi dell'utente
for (let i = 1; i <= 3; i++) {
    guess = parseInt(prompt(`sfida la fortuna, ${i}° tentativo`));
    //condizione di controllo dell'input
    if (isNaN(guess) || guess <= 0 || guess > 10) {
        alert("Attenzione, hai sprecato un tentativo con un input non valido");
    }
    //se abbiamo indovinato, la variabile win diventa true, e usciamo dal ciclo
    if (guess === randomNumber) {
        win = true;
        break;
    }
}

//condizione che verifica se l'utente abbia vinto o meno
if (win === true) {
    alert("Complimenti, hai vinto un nichelino");
}
//se non ha vinto, gli viene proposto di riprovare. Se l'utente accetta, si ricarica la pagina
else {
    const tryAgain = prompt("Non è il tuo giorno fortunato. Premi Annulla per uscire, un altro tasto per riprovare")
    if (tryAgain != null) {
        document.location.reload();
    }
}