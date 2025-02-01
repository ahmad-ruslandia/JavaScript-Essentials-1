let nombre="Antonio";

alert(`Alert test with ${nombre}`);
window.alert("Second test of windows.alert");

let decision =confirm("Are you OK?");

console.log("Content of the decision variable:",decision);

let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");