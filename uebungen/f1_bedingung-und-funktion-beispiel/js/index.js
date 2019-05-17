/*  F1  
    Verwendung eines Objekts als dictionary  
    Funktion mit Parameter und Bedingung in der Funktion  
*/

// Objekt mit einer Nachschlagetabelle
let qualitaetsstufen = {
  1: 'sehr gut', 
  2: 'gut', 
  3: 'befriedigend', 
  4: 'schlecht', 
  5: 'sehr schlecht'
};

// Funktion
function kannIchBadenGehen(indexWert){
  // Konsole leeren  
  console.clear();
  
  // Bedingung
  if (indexWert < 3 ){
    console.log(`Los gehts! Zieh die Badehose an! Die Qualität des Wassers ist ${qualitaetsstufen[indexWert]}.`);
  }
  else {
    console.log(`Lass es lieber, die Qualität des Wassers ist leider ${qualitaetsstufen[indexWert]}.`);
  }
  return qualitaetsstufen[indexWert];
}



// Ich schreibe das Ergebnis (Rückgabewert) aus der Funktion in die Variable  
let wasserQualitaet = kannIchBadenGehen(1);

// Ausgabe der Variable auf der Konsole  
// console.log(wasserQualitaet);