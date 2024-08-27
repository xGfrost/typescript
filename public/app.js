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
import { Invoice } from './classes/invoice.js';
import { listtemplate } from './classes/listtemplates.js';
import { Payment } from './classes/payment.js';
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
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new listtemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
