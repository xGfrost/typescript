"use strict";
// const anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href);
// }
//classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes RP${this.amount} for ${this.details}`;
    }
}
const inOne = new Invoice('mario', 'work on the mario website', 250);
const intwo = new Invoice('luigi', 'work on the luigi website', 300);
let Invoices = [];
Invoices.push(inOne);
Invoices.push(intwo);
// console.log(Invoices);
// inOne.client = 'yoshi';
// intwo.amount = 400;
// console.log(inOne, intwo)
Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
