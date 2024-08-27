// const anchor = document.querySelector('a');

// if (anchor) {
//     console.log(anchor.href);
// }

//classes
class Invoice{
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d:string, a: number){
        this.client = c,
        this.details = d,
        this.amount = a;
    }

    format() {
        return `${this.client} owes RP${this.amount} for ${this.details}`;
    }
}

const inOne = new Invoice('mario', 'work on the mario website', 250);
const intwo = new Invoice('luigi', 'work on the luigi website', 300);

let Invoices: Invoice[] = [];
Invoices.push(inOne);
Invoices.push(intwo);

console.log(Invoices);

inOne.client = 'yoshi';
intwo.amount = 400;

console.log(inOne, intwo)



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