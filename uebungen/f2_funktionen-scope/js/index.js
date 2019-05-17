/*  F2  
    Funktionen und Scope  
    Variablen im "globalen" Scope und innerhalb von Funktionen  
*/

// Definition einer Variablen  
let myParameter = 'Äußere Variable';

function myFunction(parameter){

  let innereVariable = 'Innere Variable';
  
  // mache etwas mit dem Parameter
  console.log("Ausgabe der Variable und Parameter: " + myParameter + " und " + parameter);
  
  // die Funktion gibt die Variable zurück  
  return innereVariable;
}

// lösche alte Ausgaben auf der Konsole  
console.clear();

// Ausgabe der Variablen auf der Konsole  
console.log("Variable 1: " + myParameter);
console.log("Variable 2: " + myFunction('Beispielparameter'));

// Das funktioniert nicht:
// console.log("Innere Variable: " + innereVariable)

/* alternative Schreibweise

console.log(`Variable 1: ${myParameter}.`);
console.log(`Variable 2: ${myFunction('Beispielparameter')}.`);

*/