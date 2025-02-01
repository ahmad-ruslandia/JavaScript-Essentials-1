//IF STATEMENT
let ready=confirm('Are you ready?');

if(ready){
    alert("User ready");
}

//IF-ELSE STATEMENT
let mayoriaEdad=18;
let edad=prompt('Input your age');

if(edad >=18){
    alert("He is of legal age");
}

else{
    alert("He is a minor");
}

//IF ELSE STATEMENT
let number = prompt("Enter a number", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}

//SWITCH CASE STATEMENT

let gate = prompt("Choose a gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
     alert("Gate A: Empty");
     break;
    case "b":
     alert("Gate B: main prize");
     win = true;
     break;
    case "c":
     alert("Gate C: Empty");
     break;
    default:
     alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}