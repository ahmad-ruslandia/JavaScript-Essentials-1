//IF ... ELSE ... IF STATEMENT
/*
if (conditions_1) {
    code
} else if (condition_2) {
    code
} else if (condition_3) {
    code
} else {
    code
}
*/
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
