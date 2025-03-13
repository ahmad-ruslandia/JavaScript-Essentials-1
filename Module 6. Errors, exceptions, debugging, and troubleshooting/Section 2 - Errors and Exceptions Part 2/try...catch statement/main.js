// 
/*
try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}
*/
try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!
