// Was speichere ich in Variablen?
/* Zahlenwerte, Strings, Objekte, Arrays, Boolean, usw. */
let meineVariable = "Variablen werden mit let deklariert";
let weitereVariable ="Konstanten mit dem Wort const.";

// Konstanten
const AKTUELLES_JAHR = 2019;

// Der deklarierten Variable wird ein neuer Inhalt zugewiesen
meineVariable = `Variablen werden in ${AKTUELLES_JAHR} mit let deklariert`;
let beideVariablen = meineVariable + " und " + weitereVariable;

console.clear();
console.log(beideVariablen);

// das schlägt fehl: 
// AKTUELLES_JAHR = 2020;

let myString = "Variablen können verschiedene Typen speichern: \n strings, numbers, arrays, objects, functions, usw.";

console.log(myString);

let zahl1 = 100/50;
let zahl2 = zahl1 * 2;

let ergebnis = zahl1 + zahl2;
console.log(ergebnis); // 6

// Vorsicht!
let zahl3 = "3"; // das ist ein String!
console.log(zahl1 + zahl3); // implicit convert of types

let zahl4 = 4;
console.log(zahl1 + zahl4);

// https://www.w3schools.com/js/js_type_conversion.asp