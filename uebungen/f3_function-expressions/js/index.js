/*  F3
    function expressions
    
*/

// function expression definieren
let myFunctionExpression = function (){
  console.log('In dieser Variable steckt eine Funktion!');
};

// eine weitere Funktion deklarieren
function namedFunction( expression ){
  // führe die function expression aus
  expression();
};

// Konsole aufräumen
console.clear();

// führe die Funktion aus
namedFunction(myFunctionExpression);