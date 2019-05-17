/*  O2
    Objekte dynamisch füllen
    Objete durchlaufen  
*/

// Objektdeklaration mit dem Literal
let myObject = {};

// Beispiel-Array
let obstKorb = ["Äpfel", "Birnen", "Bananen", "Pfirsiche", "Mango", "Weintrauben"];

// Wir füllen das Objekt mit Werten
function fillMyObject(obj, arr) {
  let arrayLength = arr.length; // hier: 6
  
  // da wir bei Null anfangen zu zählen genügt kleiner als..
  for ( let zaehler = 0; zaehler < arrayLength; zaehler++ ){
    obj[zaehler] = arr[zaehler];
  }
  return obj; 
};

// Konsole aufräumen
console.clear();

// Funktion aufrufen
fillMyObject(myObject, obstKorb); 


// einfache Suche im Objekt
for( let value in myObject){
  if (myObject[value] == 'Bananen') {
    console.log(`Gefunden bei key: ${value}`);
    break;
  }
  else {
    // console.log(myObject[value]);
  };
}


/* 
Ressources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects  

*/