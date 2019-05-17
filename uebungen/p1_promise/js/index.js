// wir speichern die Button jeweils in einer Variablen
let resolveButton = document.getElementById('resolveButton');
let rejectButton = document.getElementById('rejectButton');
let startButton = document.getElementById('startButton');


function startPromise(){
  /* wir ändern die Eigenschaften des Buttons  
     (der Start-Button kann nicht nochmal geklickt werden)
  */
  startButton.disabled = true;
  resolveButton.disabled = false;
  rejectButton.disabled = false;
  
  // wir definieren ein neues Promise
  let myPromise = new Promise( function(resolve, reject){
    /* wir registrieren auf dem "resolve"-Button einen Click-Listener  
       Beim Anklicken wird die übergebene Funktion gestartet, welche 
       den "resolve" und den "reject"-Button deaktiviert und den Promise als "gelöst" beendet
    */
    resolveButton.addEventListener("click", function(){
      resolveButton.disabled = true;
      rejectButton.disabled = true;
      resolve('resolvend');
    }, false)
    
    /* wir registrieren auf dem "reject"-Button einen Click-Listener  
       Beim Anklicken wird die übergebene Funktion gestartet, welche 
       den "revolve" und den "reject"-Button deaktiviert und den Promise als "gelöst" beendet
    */
    rejectButton.addEventListener("click", function(){
      rejectButton.disabled = true;
      resolveButton.disabled = true;
      reject('rejected');
    }, false)
  } )
  /* wenn der Promise erfolgreich aufgelöst "resolved" wird,  
     wird then automatisch aufgerufen
  */
  .then( function (message) {
    console.log(message);
    startButton.disabled = false;
  } )
  /* wenn der Promise nicht erfolgreich bzw. zurückgewiesen "rejected" wird,   
     wird catch automatisch gerufen
  */
  .catch( function (message) {
    console.log(message);
    startButton.disabled = false;
  } ); 
};

/* wir registrieren auf dem Button "start" einen Click-Listener, 
   welcher die Funktion startPromise ausführt
*/
startButton.addEventListener("click", startPromise, false);