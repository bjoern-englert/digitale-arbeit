// Wiederholung zur Arrays
console.clear();

// Deklaration eines leeren Arrays
let myArray = [];

// Deklaration eines Arrays und gleich mit Werten füllen
myArray = ['eins', 'zwei', 'drei', 'vier'];

// Element am Ende einfügen und neue Länge zurückgeben
let laenge = myArray.push('fünf', 'sechs');
console.log(laenge);

// Element am Ende entfernen und zurückgeben
let entferntesElement = myArray.pop();
console.log('Durch pop entfernt: ' + entferntesElement + '.');

// Element am Anfang entfernen und zurückgeben
entferntesElement = myArray.shift();
console.log(`Durch shift entferntes Element: ${entferntesElement}.`)

// Element am Anfang einfügen und neue Länge des Arrays zurückgeben
laenge = myArray.unshift('eins');
console.log(laenge);

// Element am Ende einfügen und neue Länge zurückgeben
laenge = myArray.push('sechs');
console.log(laenge);


// Eine Funktion auf jedes einzelne Element des Arrays anwenden
myArray.map( function(index) { console.log(index) });

/* references:
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array

*/