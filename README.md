# js-fizzbuzz
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


<!-- analisi logica work-flow -->

scrivo una funzione "for" per stampare in console numeri da 1 a 100
    se il risultato e un multiplo di 3 stampa "Fizz"
    se il risultato e un multiplo di 5 stampa "Buzz"
     oppure se il risultato e sia multiplo di 3 che di 5 stampa "FizzBuzz"
     creiamo un contenitore <div></div> con al interno un <p>
     che a sua volta ha al interno l'elemento corrispondente (Fizz, Buzz, FizzBuzz)
     lo aggiungo al DOM
     ed infine lo stilizzo