// 
/*
try {
    // code to try
} finally {
    // this will be always executed
}
*/
let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5
