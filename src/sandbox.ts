// const character = 'luigi'

// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach(input =>{
//     console.log(input)
// })

// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;

// // character = 20;
// character = 'luigi';

// // age = 'yoshi';
// age = 40;

// // isBlackBelt = 'yes';
// isBlackBelt = true;

// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }

// console.log(circ(7.5));

// let names = ['luigi', 'mario', 'yoshi'];

// names.push('toad');
// // names.push();
// // names[0] = 3;

// let numbers = [10, 20, 30, 40];

// numbers.push(25);

// let mixed = ['ken', 4, 'chun-li', 8, 9];

// mixed.push('ruy');
// mixed.push(10);
// mixed[0] = 3;


// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age : 30,
// };

// ninja.age = 40;
// ninja.name = 'ryu'
// // ninja.age = 21
// // ninja.skills = ['fighting', 'sneaking']

// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
//     age : 21,
// }

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// age = 1;

// isLoggedIn = true;

// character = 'frost';


// let frostx: string[];

// // frostx.push('shaun');

// let mixed: (string|number|boolean)[] = [];
// mixed.push('hellp');
// mixed.push(2);
// mixed.push(false);
// console.group(mixed)

// let uid: string|number;
// uid = '123';
// uid = 123;


// let frostone: object;
// frostone = { name: 'yoshi', age: 30};

// let frosttwo: {
//     name: string,
//     age: number,
//     beltColor: string,
// };

// frosttwo = { name: 'mario', age: 20, beltColor: 'black'}

// let age: any = 25;
// age = true;
// console.log(age)
// age= 'hello'
// console.log(age)
// age = { name: 'luigi'}
// console.log(age)

// let mixed: any[] = [];

// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// let ninja: { name: any, age: any};

// ninja = {name: 'yoshi', age: 25};
// console.log(ninja);
// ninja = {name: 25, age: 'yoshi'};
// console.log(ninja);

// console.log('test')
// let greet = () => {
//     console.log('hello world');
// }

// let greet: Function;

// greet = () =>{
//     console.log('hello world');
// }

// const add = (a: number, b: number, c: number |string = 10 ): void =>{
//     console.log(a + b);
//     console.log(c)
// }

// add(5, 10);

// const minus = (a: number, b: number): number => {
//     return a + b;
// }

// let result = minus(10, 7);

// type StriongOrNum = string|number;
// type objWithname = { name: string, uid: StriongOrNum}

// const logdetails = (uid: StriongOrNum, item: string) =>{
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: objWithname) => {
//     console.log(`${user.name} says hello`)
// }

// let greet: Function;

//example 1
let greet: (a: string, b:string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//example 2
let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne +numTwo;
    } else {
        return numOne - numTwo;
    }
}

//example 3
let logdetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logdetails = (frost: {name: string, age: number}) => {
    console.log(`${frost.name} is ${frost.age} years old`)
}

