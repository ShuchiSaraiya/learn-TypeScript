"use strict";
// decorators:
// allow us to change and enhance our classes
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// attributes which we apply to our classes and their members
// class decorator
// function Componenet(constructor: Function) {
//     console.log('component decorator called');
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertDom = () => {  
//         console.log('inserting in dom');
//     } 
// } 
// decorator factory 
function Componenet(value) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.num = value;
        constructor.prototype.insertDom = () => {
            console.log('inserting in dom');
        };
    };
}
// multiple decorators to a class or its members
function Pipe(constructor) {
    console.log("Pipe constructor called");
    constructor.prototype.pipe = true;
}
// f(g(x))
let Profilecomp = class Profilecomp {
};
Profilecomp = __decorate([
    Componenet(1),
    Pipe
], Profilecomp);
// method decorators
function Log(target, methodName, descriptor) {
    const OriginalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before Implementation !!!');
        OriginalMethod.call(this, ...args);
        console.log('After Implementation !!!');
    };
}
class Person1 {
    say(msg) {
        console.log('person says ', msg);
    }
}
__decorate([
    Log
], Person1.prototype, "say", null);
let p = new Person1();
p.say('holaa');
// accessor decorators - getters and setters
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const res = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof res === 'string' ? res.toUpperCase() : res;
    };
}
class Person2 {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    get fullName() {
        return `${this.fname} ${this.lname}`;
        // return 0;
        // return null;
    }
}
__decorate([
    Capitalize
], Person2.prototype, "fullName", null);
let p2 = new Person2('shuchi', 'saraiya');
console.log(p2.fullName);
// property decorators
function MinLength(len) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() { return val; },
            set(newVal) {
                if (newVal.length < len)
                    throw new Error(`pwd should be ${len} characters long`);
                val = newVal;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(pwd) {
        this.pwd = pwd;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "pwd", void 0);
let u = new User('12433');
// every time we set property , decorators get called, and validate that code written inside it
u.pwd = 'aaas';
console.log(u.pwd);
const whatchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    whatchedParameters.push({ methodName, parameterIndex });
}
class vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], vehicle.prototype, "move", null);
console.log(whatchedParameters);
