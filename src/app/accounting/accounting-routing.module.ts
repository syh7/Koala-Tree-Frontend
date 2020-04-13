import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';

const routes: Routes = [
    { path: "new", component: NewTransactionComponent },
    { path: "**", component: TransactionListComponent, pathMatch: "full" }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountingRoutingModule { }