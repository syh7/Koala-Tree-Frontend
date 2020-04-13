export interface Transaction {
    id?: number;
    amountTotal: number;
    amountSjoerd: number;
    amountLoes: number;
    amountAll: number;
    category: string;
    message?: string;
    date: Date;
    createdDateTime?: Date;
}