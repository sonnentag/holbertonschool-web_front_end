// Lexical scoping and welcome message

function welcome(firstName, lastName) {

  function displayFullName() {

    return firstName + " " + lastName;
  }

  alert( "Welcome " + displayFullName() + "!");
}
