import { Category } from './category';
import { User } from './user';

export interface Transaction {
    id?: number;
    category: Category;
    message?: string;
    date: Date;
    entries: Entry[];
    createdDateTime?: Date;
}

export interface Entry {
    id?: number;
    user: User;
    amount: number;
    createdDateTime?: Date;
}