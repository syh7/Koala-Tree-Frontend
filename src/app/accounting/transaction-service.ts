import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Transaction } from './transaction';

@Injectable()
export class TransactionService {
    baseUrl = 'localhost:8081/api/';
    transactionUrl = this.baseUrl + 'transactions/';
    
    constructor(private http: HttpClient){ }

    getAllTransactions() : Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.transactionUrl);
    }

    getTransactionById(id : number) : Observable<Transaction> {
        return this.http.get<Transaction>(this.transactionUrl + id);
    }
}