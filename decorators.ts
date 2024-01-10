// decorators:
// allow us to change and enhance our classes

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
function Componenet(value: number){
    return (constructor: Function) => {
            console.log('Component decorator called');
            constructor.prototype.uniqueId = Date.now();
            constructor.prototype.num = value;  
            constructor.prototype.insertDom = () => {  
                console.log('inserting in dom');
            } 
    } 
}

// multiple decorators to a class or its members

function Pipe (constructor: Function){
    console.log("Pipe constructor called");
    constructor.prototype.pipe = true;  
}

// f(g(x))
@Componenet(1)
@Pipe
class Profilecomp {
}

// method decorators

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const OriginalMethod = descriptor.value as Function;

    descriptor.value = function(...args: any) {
        console.log('Before Implementation !!!');   
        OriginalMethod.call(this, ...args);  
        console.log('After Implementation !!!');   
    }
}
class Person1 {
    @Log
    say(msg: string){
        console.log('person says ', msg);
    }
}

let p = new Person1();
p.say('holaa');

// accessor decorators - getters and setters

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.get;
    descriptor.get = function(){
        const res = original?.call(this);
        return typeof res === 'string' ? res.toUpperCase() : res;
    }
}

class Person2 {
    constructor(public fname: string, public lname: string){}

    @Capitalize
    get fullName(){
        return `${this.fname} ${this.lname}`;
        // return 0;
        // return null;
    }
}

let p2 = new Person2('shuchi','saraiya')
console.log(p2.fullName);

// property decorators

function MinLength(len: number){
    return (target: any, propertyName: string) => {
        let val: string;

        const descriptor: PropertyDescriptor = {
            get() { return val;},
            set(newVal: string) {
                if(newVal.length < len)
                    throw new Error(`pwd should be ${len} characters long`)
                val = newVal;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @MinLength(4)
    pwd: string;

    constructor( pwd: string){
        this.pwd = pwd;
    }
}

let u = new User('12433')
// every time we set property , decorators get called, and validate that code written inside it
u.pwd =  'aaas';
console.log(u.pwd);

// parameter decorator
// stores meta data of perameters

type watchParameter =  {
    methodName: string,
    parameterIndex: number
};

const whatchedParameters: watchParameter[] = []

function Watch(target: any, methodName: string, parameterIndex: number){
    whatchedParameters.push({methodName,parameterIndex})
}

class vehicle {
    move(@Watch speed: number){}
}
console.log(whatchedParameters);

