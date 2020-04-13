import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction-service';
import { LoggerService } from 'src/app/commons/logger/logger-service';

@Component({
    selector: 'app-new-transaction',
    templateUrl: './new-transaction.component.html',
    styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent {
    transactions : Transaction[];

    constructor(private transactionService : TransactionService, private loggerService : LoggerService){
        this.transactionService = transactionService;
        this.loggerService.log("TransactionDetailComponent constructor");
    }
}