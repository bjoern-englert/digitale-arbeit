/* wir definieren eine Objekt und füllen es mit einem Array, das wiederum Objekte zu einzelnen Musikstücken enthält */
let musikSammlung = {
  titel : [
    {
    interpret: "Seeed",
    titelname: "Ticket",
    laenge: 3,
    genre: "Pop",
    erscheinungsjahr: "2019",
  },
  {
    interpret: "Post Malone",
    titelname: "Wow",
    laenge: "2:37",
    genre: "Rap",
    erschenungsjahr: "2019",
  },
  {
    interpret: "Era Istrefi",
    titelname: "Bonbon",
    laenge: 3,
    genre: "POP",
    erscheinungsjahr: "2016",
},
  {
    interpret: "French Montana",
    titelname: "Unforgettable",
    laenge :4,
    erscheinungsjahr: "2017",
  },
  {
    interpret: "Hybris",
    titelname: "Distance",
    laenge :3,
    erscheinungsjahr: "2018", 
  },
  {
    interpret: "The Drifters",
    titelname: "Under The Broadwalk",
    laenge: "2:41",
    genre: "Rhythm & Blues",
    erscheinungsjahr: "1962",},
  {    
    interpret: "Kikuo",
    titelname: "ごめんね ごめんね(Gomen ne, Gomen ne)",
    laenge: "4:47",
    genre: "Rock",
    erscheinungjahr: "2011",}
]
};

// Suchfunktion
// wir definieren eine Variable mit dem Suchbegriff
let suchbegriff = "2019";

// wir räumen die Console auf
console.clear();

/*
  In dem Objekt "Musiksammlung" gibt es ein Array, welches unter dem Schlüssel "titel" erreichbar ist. Mit der Array-Methode .map() durchlaufen wir dieses Array und führen für jeden Eintrag im Array die gleiche Funktion aus. In dem Array ist auf jeder Indexposition jeweils ein Objekt mit Informationen über einen Musiktitel enthalten.   
  Die Funktion, die wir mit .map() aufrufen, ruft selbst eine for..in Schleife auf. Diese Schleife durchläuft wiederum das aktuelle Objekt und führt mit if..else einen Vergleich jedes Eintrages im Objekt mit dem Suchbegriff durch.  
  Wird eine eine Übereinstimmung gefunden, wird der Treffer auf die Console ausgegeben.
  */
musikSammlung['titel'].map( function(aktuellesObjekt){
  /* 
    die Methode .map() ruft für jede Indexposition des Arrays musikSammlung['titel'] die Funktion auf und übergibt ihr den aktuellen Wert an der Indexposition (= das dort gespeicherte Objekt). Den Wert der aktuellen Indexposition übergeben wir als Parameter "aktuellesObjekt" in die Funktion.
  */
  for (position in aktuellesObjekt){
    /* 
      innerhalb der Funktion rufen wir eine for..in Schleife auf. Diese durchläuft das übergebene Objekt und führt für jede Position ein Vergleich mit dem Suchbegriff durch.
    */
    if(aktuellesObjekt[position] == suchbegriff){
      console.log(`Treffer für ${aktuellesObjekt.interpret} mit dem Titel ${aktuellesObjekt.titelname}.`);
    }
  }
});

/* 
  Ergänzungsmöglichkeiten:  
  
  - ergänzt das Objekt um weitere Einträge
  - schreibt Euch eine Funktion die neue Einträge in ein Array einfügt (also ein Objekt in das Array "pushen")
  - statt das Suchergebnis gleich auf der Konsole auszugeben, könnt Ihr das Suchergebnis in ein neues Array speichern.
  - Ihr könnt die Suchbedingungen verändern. Z.B. alles finden, was nicht auf den Suchbegriff passt.
  - Momentan ist die Suche "case sensitive", lässt sich die Suche so verändern, dass Begriffe egal ob klein- oder großgeschrieben gefunden werden? (Tip: konvertiert den Suchbegriff und den aktuellen Wert der Schleife in Kleinbuchstaben, bevor ihr den Vergleich ausführt)
  
*/