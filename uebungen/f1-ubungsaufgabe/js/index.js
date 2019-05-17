/*  F1 - Übungsaufgabe
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

// einfaches Beispiel: keys eines Objektes sind unique
let gewaesserQualitaeten = {
  "Wannsee" : 2,
  "Teltowkanal" : 3,
  "Spree": 4,
  "Müggelsee": 2,
}

// Funktion
function kannIchBadenGehen(gewaesser){
  
  // Schreibe den Wert für die Qualität in eine Variable
  let indexWert = gewaesserQualitaeten[gewaesser];
  console.log(indexWert);
  
  
  if(indexWert){
    // Bedingung
    if (indexWert < 3 ){
      console.log(`Los gehts! Zieh die Badehose an! Die Qualität des Wassers (${gewaesser}) ist ${qualitaetsstufen[indexWert]}.`);
    }
    else {
      console.log(`Lass es lieber, die Qualität des Wassers (${gewaesser}) ist leider ${qualitaetsstufen[indexWert]}.`);
    }
    
    return qualitaetsstufen[indexWert];
  }
  else{
    return (console.log(`Das Gewässer "${gewaesser}" ist nicht in der Sammlung`));
  }
}  


// Ich schreibe das Ergebnis (Rückgabewert) aus der Funktion in die Variable  
let wasserQualitaet = kannIchBadenGehen("Wannsee");

// Ausgabe der Variable auf der Konsole  
// console.log(wasserQualitaet);