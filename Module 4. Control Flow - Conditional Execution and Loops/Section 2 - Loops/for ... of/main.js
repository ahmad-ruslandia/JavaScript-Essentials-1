//FOR OF
/*
for (variable of array) {
    block of code
}
*/
let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190
