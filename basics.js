"use strict";
let s = 2 /* medium */;
console.log("--->", s);
let quant = 100;
// null undefined
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!!');
}
greet(null);
let speed = null;
let ride = {
    // nullish coalescing operator
    speed: speed !== null && speed !== void 0 ? speed : 30
};
// type assertion
let phone = document.getElementById('phone');
let phone2 = document.getElementById('phone');
phone.value;
// unlnown type
// use type narrowing 
// never type
// function events() : never {
//     while(true) {
//         // code
//     }
// }
// function reject(msg : string) : never{
//     throw new Error(msg);
// }
// events()
// reject('errors')
// console.log('un reachable')
