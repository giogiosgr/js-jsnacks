'use strict';

// inizializziamo la variabile che conterrà man mano la somma
let somma = 0;

//iniziamo il ciclo for per 10 iterazioni
for (let i = 1; i <= 10; i++) {
    //ad ogni iterazione aggiungiamo alla variabile somma il nuovo valore (convertito da String a Number)    
    somma += +prompt(`inserisci ${i}° numero`);
}

// stampiamo la somma
console.log(somma);