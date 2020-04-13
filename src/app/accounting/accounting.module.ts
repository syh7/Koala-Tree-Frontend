import { NgModule } from '@angular/core';
import { AccountingRoutingModule } from './accounting-routing.module';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
    imports: [
        CommonModule,
        AccountingRoutingModule
    ],
    declarations: [
        TransactionListComponent
    ]
})
export class AccountingModule { }