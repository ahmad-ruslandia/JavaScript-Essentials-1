/*Exercise 1: Write a script that will ask the user to input a number.
Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.*/

let bingoNumber = prompt ('Tell me a number');

if (bingoNumber >= 90 && bingoNumber <= 110){
    alert("Bingo!");
}

else{
    alert("Miss");
}

//Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.

let bingoNumberTernary = prompt ('Tell me a number');
(bingoNumberTernary >= 90 && bingoNumberTernary <= 110)? alert("Bingo!") : alert("Bingo!"); 


/*Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing
a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input
is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct
number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.*/
let inputOne = Number(prompt ("Input the first number"));
let inputTwo = Number(prompt ("Input the second number"));
let operationInputs= prompt ("Input the operation to be performed");

if ( !Number.isNaN (inputOne) && !Number.isNaN(inputTwo)){
    switch (operationInputs){
        case "+":
            alert (inputOne + inputTwo);
            break;

        case "-":
            alert (inputOne - inputTwo);
            break;

        case "*":
            alert (inputOne * inputTwo);
            break;

        case "/":
            alert (inputOne / inputTwo);
            break;
        
        default:
            alert("Invalid operation");
            break;
    }
}
else{
    alert("Invalid");
}