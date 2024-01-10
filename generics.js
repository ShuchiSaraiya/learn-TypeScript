"use strict";
var _a;
// generic classes
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, 'a');
let pair2 = new KeyValuePair(2, 'b');
// generic functions
function wrapInArray(value) {
    return [value];
}
function fetch(url) {
    return { data: null, error: null };
}
let res = fetch('url');
(_a = res.data) === null || _a === void 0 ? void 0 : _a.title;
// generic constraints
function echo(value) {
    return value;
}
function fun(value) {
    return value;
}
fun({ name: 'ss' });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        this._objects.map((ob) => console.log(ob[property]));
        return this._objects.find(obj => obj[property] === value);
    }
}
let s1 = new Store();
s1.add({ name: 'Fridge', price: 1000 });
s1.add({ name: 'tv', price: 2000 });
console.log(s1.find('price', 2000));
let p1 = { name: 'ss', price: 1000 };
let r = { name: 'AC', price: 3000 };
