/* Boolean */ 
let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean


/* Number */ 
let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2     
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123


/* Big Int */ 
let  big  =  1234567890000000000000n;
let  big2  =  1n;
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n


/* String */ 
let  country  =  "Malawi";
let  continent  =  'Africa';
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string


/* Undefined */ 
Let  declaredVar;
console.log(typeof  declaredVar);  //  ->  undefined
declaredVar  =  5;
console.log(typeof  declaredVar);  //  ->  number
declaredVar  =  undefined;
console.log(typeof  declaredVar);  //  ->  undefined
Console.log(typeof  notDeclaredVar);  //  ->  undefined
console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined

/* Null */ 
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object