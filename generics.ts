// generic classes
class KeyValuePair<T,U> {
    constructor(public key: T, public value: U) {}
}

let pair = new KeyValuePair<number,string>(1,'a');
let pair2 = new KeyValuePair(2,'b');

// generic functions
function wrapInArray<T>(value: T) {
    return [value];
}

// generic iterface
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string):Result<T>{
    return {data: null, error: null}
}

interface User {
    name: string;
}

interface product {
    title: string;
}

let res = fetch<product>('url');
res.data?.title

// generic constraints
function echo<T extends number | string>(value :T): T {
    return value;
}

function fun <T extends {name: string}>(value: T): T {
    return value;
}

fun({name: 'ss'})

// Extending generic classes 3 options
// pass parameter to child class
// restrict parameter
// specify parameter 

// keyof operator

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    private _objects: T[] = []

    add(obj: T): void {
        this._objects.push(obj);
    }
    find(property: keyof T, value: unknown): T | undefined{
        this._objects.map((ob)=> console.log(ob[property]))
        return this._objects.find(obj => obj[property] === value);
    }
}

let s1 = new Store<Product>();
s1.add({name: 'Fridge', price: 1000});
s1.add({name: 'tv', price: 2000});
console.log(s1.find('price',2000));

// type mapping

type ReadonlyProduct = {
    // index signatue
    // keyof
    readonly [property in keyof Product]: Product[property]
}

let p1: ReadonlyProduct = {name: 'ss', price: 1000}

// generic type mapping 

type Readonly1<T> = {
    readonly [property in keyof T]: T[property]
}
let r: Readonly<Product> = {name: 'AC', price: 3000}