/*  F5  
    JS moduls (Einführung)  
*/

// Ein Modul hat eine äußere und mind. eine innere Funktion  
let myModule = function (parameter){
  let name = 'Der Name meines Moduls';
  
  // einfache "get" Funktion
  function getInfo(){
    console.log(`Variable >>name<< hat den Wert: ${name}.`);
  }
  
  // einfache "set" Funktion
  function setInfo(parameter){
    name = parameter;
    console.log(`Variable >>name<< geändert auf: ${parameter}.`);
  }
  
  // Rückgabe der inneren Funktionen als Objekt  
  return {
    getInfo: getInfo,
    setInfo: setInfo,
  };
}();

// Konsole aufräumen  
console.clear();

// innere Funktionen lassen sich direkt aufrufen und haben den Scope des Moduls  
myModule.getInfo();
myModule.setInfo('Hallo Welt');
myModule.getInfo();