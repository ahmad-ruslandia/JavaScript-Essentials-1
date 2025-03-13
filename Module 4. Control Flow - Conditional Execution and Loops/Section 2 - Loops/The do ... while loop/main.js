//DO-WHILE LOOP
/* 
do {
    code block
} while(condition);
*/

let isOver;
let counter = 1;

do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);
