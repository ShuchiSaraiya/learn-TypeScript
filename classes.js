"use strict";
// OOP
// publec private protected
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('invalid');
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    clacuaeTax() {
    }
}
let acc = new Account(1, 'shuchi', 0);
acc.deposit(100);
// console.log(acc.balance);
// console.log(typeof acc);
// console.log(acc instanceof Account);
// console.log(acc.getBalance());
// other way - parameter properties
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('invalid');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('invalid');
        this._balance = value;
    }
    clacuaeTax() {
    }
}
let acc2 = new Account2(2, "savan", 100);
// console.log(acc2.balance);
acc2.balance = 200;
// console.log(acc2.balance);
// index signature property
class SeatAssignment {
}
let seat = new SeatAssignment();
seat.A1 = 'mosh';
seat['A2'] = 'john';
//static members
class Ride {
    start() { Ride._activeRide++; }
    end() { Ride._activeRide--; }
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
let r1 = new Ride();
r1.start();
let r2 = new Ride();
r2.start();
console.log(Ride.activeRide);
// inheritance 
// protected members are inherited but private members are not
// method overriding
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    get fullName() {
        return this.fname + ' ' + this.lname;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentID, fname, lname) {
        super(fname, lname);
        this.studentID = studentID;
    }
    get fullName() {
        return 'student ' + super.fullName;
    }
    takeTest() {
        console.log('test');
    }
}
let st = new Student(1, 'shuchi', 'ss');
// console.log(st.fullName);
// plymorphism - allows us to follow open closed principle
function printName(people) {
    for (let p of people) {
        console.log(p.fullName);
    }
}
printName([
    new Student(1, 'tarang', 'pokal'),
    new Person('shuchi', 'saraiya')
]);
// abstract classes and methods
// cannnot create instance of abstract class
// another class has to extend it
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('circle rendering');
    }
}
class Square extends Shape {
    constructor(l, color) {
        super(color);
        this.l = l;
    }
    render() {
        console.log('square rendering');
    }
}
// Interfaces vs Types
// Both can be used to describe the shape of an object:
