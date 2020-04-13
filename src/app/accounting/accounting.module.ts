import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';

@NgModule({
    imports: [
        CommonModule,
        AccountingRoutingModule
    ],
    declarations: [
        TransactionListComponent,
        NewTransactionComponent
    ]
})
export class AccountingModule { }