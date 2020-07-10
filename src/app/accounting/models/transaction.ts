import { Category } from './category';
import { User } from './user';

export interface Transaction {
    id?: number;
    message?: string;
    date: Date;
    entries: Entry[];
    createdDateTime?: Date;
}

export interface Entry {
    id?: number;
    user: User;
    category: Category;
    amount: number;
    createdDateTime?: Date;
}