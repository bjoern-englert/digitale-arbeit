/*  F4  
    Funktionen und Parameter, Rückgabewert  
    Funktionsausdruck (function expression)  
    function expressions ausführen  
    IIFE (imediately invoked function expressions)  
*/

function addiere(summand1, summand2){
  
  // führe die Addition durch
  let summe = summand1 + summand2;
  
  // gib das Ergebnis zurück
  return summe;
}

/* 
  function expression, 
  die gleich ausgeführt wird IIFE (inmediately invoked function expression)
*/
const WERT = function(){
  // führe hier Berechnungen durch
  let ergebnis = 40 + 2;
  return ergebnis;
}();


console.log(`Ergebnis: ${addiere(1, WERT)}.`);