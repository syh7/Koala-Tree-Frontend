import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../transaction-service';
import { LoggerService } from 'src/app/commons/logger/logger-service';
import { Category } from '../models/category';
import { User } from '../models/user';

@Component({
    selector: 'app-new-transaction',
    templateUrl: './new-transaction.component.html',
    styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent {
    transactions: Transaction[];
    categories = Object.keys(Category);
    users = Object.keys(User);

    constructor(private transactionService: TransactionService, private loggerService: LoggerService) {
        this.loggerService.log("NewTransactionComponent constructor");
    }

    public saveTransaction(): void {
        this.loggerService.log("saved transaction");
    }

    onSubmit() {
        this.loggerService.log("on submit");
        return false;
    }
}