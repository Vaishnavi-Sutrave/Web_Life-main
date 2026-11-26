// 1. STRING TO NUMBER
let a = "100";

console.log(Number(a));          // 100
console.log(typeof Number(a));   // number

// 2. NUMBER TO STRING
let b = 100;

console.log(String(b));          // "100"
console.log(typeof String(b));   // string

// 3. STRING TO INTEGER
let c = "123.45";

console.log(parseInt(c));        // 123
console.log(typeof parseInt(c)); // number

// 4. STRING TO FLOAT
let d = "123.45";

console.log(parseFloat(d));        // 123.45
console.log(typeof parseFloat(d)); // number

// 5. NUMBER TO STRING USING toString()
let e = 500;

console.log(e.toString());        // "500"
console.log(typeof e.toString()); // string

// 6. BOOLEAN CONVERSION
let f = 1;
let g = 0;

console.log(Boolean(f)); // true
console.log(Boolean(g)); // false

// 7. STRING TO BOOLEAN

console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false

// 8. NUMBER TO BOOLEAN

console.log(Boolean(100)); // true
console.log(Boolean(0));   // false
console.log(Boolean(-10)); // true

// 9. NULL CONVERSION

console.log(Number(null));  // 0
console.log(String(null));  // "null"
console.log(Boolean(null)); // false

// 10. UNDEFINED CONVERSION

console.log(Number(undefined));  // NaN
console.log(String(undefined));  // "undefined"
console.log(Boolean(undefined)); // false

// 11. NAN CONVERSION

console.log(Number("Hello")); // NaN
console.log(String(NaN));      // "NaN"
console.log(Boolean(NaN));     // false


// 12. ARRAY TO STRING

let arr = [10, 20, 30];

console.log(String(arr)); // "10,20,30"
console.log(arr.toString()); // "10,20,30"

// 13. ARRAY TO NUMBER

console.log(Number([]));    // 0
console.log(Number([10]));  // 10
console.log(Number([10,20])); // NaN

// 14. IMPLICIT TYPE CONVERSION

console.log("10" + 5); // "105"
console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log("10" / 2); // 5

// 15. EXPLICIT TYPE CONVERSION
let x = "50";
let y = 20;

console.log(Number(x) + y); // 70
console.log(String(y) + x); // "2050"

// 16. BIGINT CONVERSION

let num = 100;

console.log(BigInt(num)); // 100n

// 1. TRUTHY VALUES

// Truthy values are values that become TRUE when converted into Boolean.

console.log(Boolean("Hello"));  // true
console.log(Boolean("JavaScript")); // true
console.log(Boolean(" "));      // true
console.log(Boolean(100));      // true
console.log(Boolean(-10));     // true
console.log(Boolean(1));       // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean("0"));     // true

// 2. FALSY VALUES
// JavaScript has 8 falsy values.

// 1. false
console.log(Boolean(false));      // false

// 2. 0
console.log(Boolean(0));          // false

// 3. -0
console.log(Boolean(-0));         // false

// 4. 0n
console.log(Boolean(0n));         // false

// 5. null
console.log(Boolean(null));       // false

// 6. undefined
console.log(Boolean(undefined));  // false

// 7. NaN
console.log(Boolean(NaN));        // false

// 8. Empty string
console.log(Boolean(""));         // false