const enum Size {small=1,medium,large}
let s:Size = Size.medium

console.log("--->",s);


// literal type (exact, specific)
// limit values we can assign to variable

type Quantity = 100 | 50;
let quant : Quantity = 100;

type Metric = 'cm' | 'inch';

// null undefined

function greet(name:string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!!');
}

greet(null); 

let speed: number | null = null;
let ride =  {
// nullish coalescing operator
speed : speed ?? 30
}

// type assertion

let phone = document.getElementById('phone') as HTMLInputElement;
let phone2 = <HTMLInputElement> document.getElementById('phone') ;

phone.value  


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