function meineFunktion(){
  // mache irgendwas
  console.log('event!');
}
let meinButton = document.getElementById('klickButton');
meinButton.addEventListener("click", meineFunktion, false);

/* 
   Referenzen:  
   https://www.w3schools.com/js/js_htmldom_events.asp  
   https://www.w3schools.com/js/js_htmldom_eventlistener.asp  
*/