1. creo main con id grid nell'html
2. recupero elemento nel js.
2.1 ciclo for per difinire numero caselle griglia, (8x8 i<64)
3. funzione per creare singola casella, con all'interno la variabile createElement div.
3.1 classList .add 'square' (css per le caselle)
3.2 return square
3.4  let square create element dento function 
3.5 aggiungo event listener click al quadratino  
3.6 grid append square.
4. creo il pulsante per generare la griglia ed inserisco ciclo griglia nella function del bottone.













Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus (da fare solo una volta finito l'esercizio base)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:
:party_wizard: Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.