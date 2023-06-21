//variables & operators

//bigint

const a = BigInt(Number.MAX_SAFE_INTEGER);

console.log(a);
console.log(2**53);

//incremental, decremental operators ++,--

let b = 5;
b = b+1;
//b++; //post increment ,return first then increment
//b--; //post decrement
++b; //pre increment, first increment then return
--b; //pre decrement
console.log("b = " + b);

let c = 5;
let d = 4;
let result = c++ + d++ + ++d + ++c; //association, operator precedence, left to right(+,-)
console.log(result);

//unary & binary operator
//Math Expression
