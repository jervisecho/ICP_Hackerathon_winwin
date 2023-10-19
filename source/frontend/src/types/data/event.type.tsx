import {Transaction} from "@type/data/transaction.type";

export type Event = {
    id: string;
    name: string;
    location: string;
    logo: string;
    category: string;
    price: number;
    creator: string;
    finish: boolean;
    transactions: Array<Transaction>
}

