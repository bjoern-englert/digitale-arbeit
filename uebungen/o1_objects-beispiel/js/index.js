/*  O1  
    Objekte  
    Deklaration  
    Zugriff  
    Beispiele  
*/

// Objektdeklaration mit dem Literal
let myObject = {};

// Dem Objekt werden mit Deklaration gleich Werte zugewiesen
myObject = { key: 'value'};

// Dem Objekt werden weitere Werte zugewiesen
myObject.zweiterKey = "zwei";

// alternative Schreibweise
myObject['dritterKey'] = "drei";


// Beispiel für ein Objekt
let addressBookTemplate = {
  name: 'name',
  fon: 0123456789,
  mail: 'name@musterfrau.test',
  street: 'Mustergasse',
  number: '1a',
  zip: 12345,
  city: 'Berlin'
}

// Beispiel für ein Objekt mit eingebettetem Objekt
let betterAdressBookTemplate = {
  name: 'name',
  fon: 0123456789,
  mail: 'name@musterfrau.test',
  address: {
      street: 'Mustergasse',
      number: '1a',
      zip: 12345,
      city: 'Berlin'
  }
}

// Beispiel Adressbuch
let myAdressBook = {
  "friends" : [
    { 
      name : "Max",
      mail : "max@mustermann.test",
      fon  : 987654321,
      address: {
        street: "Max-Allee",
        number: "100",
        zip   : 08150,
        city  : "Musterhausen"
      }
    },
    {
      name : "Marianne",
      fon  : 0815123456789,
      mail : "marianne@musterfrau.test",
      address: {
        street : "Mariannengasse",
        number : "99c",
        zip    : 54321,
        city   : "Mariannenstadt"
      },
    },
  ]
}

// Aufräumen der Konsole  
console.clear();

// Zugriff auf Werte des Objekts
// gebe aus dem ersten Feld des Arrays den Wert für "name" aus
console.log(myAdressBook.friends[0].name);
console.log(myAdressBook.friends[1].address.street);

// Alternative Schreibweise
console.log(myAdressBook["friends"][0]["fon"]);