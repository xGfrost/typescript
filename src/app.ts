// const anchor = document.querySelector('a');

// if (anchor) {
//     console.log(anchor.href);
// }

//interfaces
interface isperson{
    name:string;
    age:number;
    speak(a: string): void;
    spend(a:number): number;
}

const me: isperson ={
    name: 'shaun',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log(`i spent`, amount);
        return amount;
    },
};

const greetPerson = (person: isperson) => {
    console.log('hello', person.name);
}

greetPerson(me)
console.log(me)

//classes
import {Invoice} from './classes/invoice.js'

const inOne = new Invoice('mario', 'work on the mario website', 250);
const intwo = new Invoice('luigi', 'work on the luigi website', 300);

let Invoices: Invoice[] = [];
Invoices.push(inOne);
Invoices.push(intwo);

// console.log(Invoices);

// inOne.client = 'yoshi';
// intwo.amount = 400;

// console.log(inOne, intwo)
Invoices.forEach(inv => {
    console.log(inv.client,inv.amount, inv.format());
});



// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})