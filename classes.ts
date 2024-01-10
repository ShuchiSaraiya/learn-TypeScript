// OOP
// publec private protected

class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;
    

    constructor(id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount : number): void {
        if(amount <= 0)
            throw new Error('invalid')
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }

    private clacuaeTax() {

    }
}

let acc = new Account(1,'shuchi',0)
acc.deposit(100);
// console.log(acc.balance);
// console.log(typeof acc);
// console.log(acc instanceof Account);
// console.log(acc.getBalance());

// other way - parameter properties

class Account2 {
    nickname?: string;
    

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number){
    }

    deposit(amount : number): void {
        if(amount <= 0)
            throw new Error('invalid')
        this._balance += amount;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number){
        if(value <= 0)
            throw new Error('invalid');
        
        this._balance = value;
    }

    private clacuaeTax() {

    }
}

let acc2 = new Account2(2,"savan",100);

// console.log(acc2.balance);
acc2.balance = 200
// console.log(acc2.balance);

// index signature property

class SeatAssignment {
    [seatNumber : string] : string;
}

let seat = new SeatAssignment();
seat.A1 = 'mosh';
seat['A2'] = 'john';

//static members
class Ride {
    private static  _activeRide : number = 0;

    start(){ Ride._activeRide++ ;}
    end(){ Ride._activeRide-- ;}
     
    static get activeRide () {
        return Ride._activeRide
    }
}

let r1 = new Ride();
r1.start();

let r2 = new Ride();
r2.start();

console.log(Ride.activeRide);


// inheritance 
// protected members are inherited but private members are not
// method overriding

class Person {
    constructor(public fname: string, public lname: string){ }
    
    get fullName() {
        return this.fname + ' ' + this.lname;
    }

    walk(){
        console.log('walking');
    }
}

class Student extends Person {
    constructor(public studentID: number, fname: string, lname:string){
        super(fname,lname);
    }

    override get fullName() {
        return 'student ' + super.fullName;
    } 

    takeTest() {
        console.log('test');
        
    }
}

let st = new Student(1,'shuchi' , 'ss');
// console.log(st.fullName);

// plymorphism - allows us to follow open closed principle

function printName(people : Person[]) {
    for(let p of people){
        console.log(p.fullName);
    }
}

printName([
    new Student(1,'tarang','pokal'),
    new Person('shuchi','saraiya')
])
 
// abstract classes and methods
// cannnot create instance of abstract class
// another class has to extend it

abstract class Shape {
    constructor(public color: string){}
    
    // abstract method 
    // no implemention 
    // existt in abstract class only
    abstract render() : void ;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log('circle rendering');
    }
}
class Square extends Shape {
    constructor(public l: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log('square rendering');
    } 
}

// interface -- code is more consice and shorter both in TS and JS
// cannnot have method implementation
// only have method declaration
interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

// Interfaces vs Types
// Both can be used to describe the shape of an object: