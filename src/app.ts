// const anchor = document.querySelector('a');

// if (anchor) {
//     console.log(anchor.href);
// }

//interfaces
// interface isperson{
//     name:string;
//     age:number;
//     speak(a: string): void;
//     spend(a:number): number;
// }

// const me: isperson ={
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log(`i spent`, amount);
//         return amount;
//     },
// };

// const greetPerson = (person: isperson) => {
//     console.log('hello', person.name);
// }

// greetPerson(me)
// console.log(me)

//classes
import {Invoice} from './classes/invoice.js'
import { listtemplate } from './classes/listtemplates.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docone: HasFormatter;
// let doctwo: HasFormatter;

// docone = new Invoice('yoshi', 'web work', 250);
// doctwo = new Payment('mario', 'plumbing work', 440);

// let docs: HasFormatter[] = [];
// docs.push(docone);
// docs.push(doctwo);
// console.log(docs);

// const inOne = new Invoice('mario', 'work on the mario website', 250);
// const intwo = new Invoice('luigi', 'work on the luigi website', 300);

// let Invoices: Invoice[] = [];
// Invoices.push(inOne);
// Invoices.push(intwo);

// // console.log(Invoices);

// // inOne.client = 'yoshi';
// // intwo.amount = 400;

// // console.log(inOne, intwo)
// Invoices.forEach(inv => {
//     console.log(inv.client,inv.amount, inv.format());
// });



// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance

const ul = document.querySelector('ul')!;
const list = new listtemplate(ul);

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    
    let values: [string, string, number]
     values = [toFrom.value,details.value, amount.valueAsNumber  ]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end');
})

//tuples
let arr = ['ryu', 25, true];

arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 2;
tup[2] = false;

// let student: [string, number];
// student = ['chunli', 223232];

//generics

const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() *100);
    return {...obj, uid};
}

let docone = addUID({name: 'yoshi', age: 40});

console.log(docone.age)

//enums
enum resourcetype{ BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

//with interfaces

interface Resource<T>{
    uid: number;
    resourceName: resourcetype;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: resourcetype.BOOK,
    data: 'shain'
}
const docfor: Resource<object> = {
    uid: 2,
    resourceName: resourcetype.PERSON,
    data: {name: 'sanra'}
}

const docfive: Resource<string[]> ={
    uid: 3,
    resourceName: resourcetype.DIRECTOR,
    data: ['test', 'milk', 'toiler roll']
}

console.log(docThree, docfor, docfive)