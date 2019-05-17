/*  O3  
    Rekursion  

*/

// little Adressbook
let myAddressBook = {
  friends : [
    { 
      name : "Max",
      mail : "max@mustermann.test",
       address: {
          street: 'Mustergasse',
          number: '1a',
          zip: 12345,
          city: 'Berlin'
         }
    },
    {
      name : "Marianne",
      mail : "marianne@musterfrau.test",
       address: {
          street: 'Mustergasse',
          number: '10a',
          zip: 54321,
          city: 'Berlin'
         }
    }
  ]
}


function suchFunktion(datensatz, suchbegriff){
  for ( let suchposition in datensatz ){
    if (Array.isArray(datensatz[suchposition]) === true || typeof(datensatz[suchposition]) === 'object') {
      console.log('erneuter Aufruf der Suchfunktion');
      suchFunktion(datensatz[suchposition], suchbegriff);
    }
    else if (datensatz[suchposition] == suchbegriff){
      console.log("Juhu! Gefunden!");
      // mache etwas mit dem Ergebnis
    }
    else {
      // (noch) kein Treffer..
    }
  };
}
// Konsole aufräumen
console.clear();


// Die Suchfunktion mit einem Suchstring aufrufen
suchFunktion(myAddressBook, "Berlin");