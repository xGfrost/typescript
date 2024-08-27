export class Invoice{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client : string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes RP${this.amount} for ${this.details}`;
    }
}