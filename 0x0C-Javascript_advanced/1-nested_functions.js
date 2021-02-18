// Closure Scope Chain

var globalVariable = "Welcome";

// outer
function outer() {
  alert(globalVariable)
  let course = "Holberton";

  // inner
  function inner() {
    alert(globalVariable + " " + course)
    let exclamation = "!";

    // inception
    function inception() {
      alert(globalVariable + " " + course + exclamation)
    }

    inception();
  }

  inner();
}

outer();
