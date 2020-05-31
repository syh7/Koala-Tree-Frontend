import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../transaction-service';
import { LoggerService } from 'src/app/commons/logger/logger-service';

@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
    transactions : Transaction[];

    constructor(private transactionService : TransactionService, private loggerService : LoggerService){
        this.loggerService.log("TransactionListComponent constructor");
        this.updateTransactions();
    }

    public updateTransactions() : void {
        this.transactionService.getAllTransactions()
        .subscribe((data : Transaction[]) => {
            this.transactions = data;
            this.loggerService.log("Transactions loaded: " + this.transactions.length);
        });
    }
}