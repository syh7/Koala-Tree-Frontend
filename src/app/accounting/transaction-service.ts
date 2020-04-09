import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Transaction } from './transaction';
import { Logger } from '../commons/logger/logger';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    baseUrl = 'http://localhost:8081/api/';
    transactionUrl = this.baseUrl + 'transactions/';
    
    constructor(private http: HttpClient, private logger : Logger){ }

    getAllTransactions() : Observable<Transaction[]> {
        this.logger.log("Request all transactions");
        return this.http.get<Transaction[]>(this.transactionUrl);
    }

    getTransactionById(id : number) : Observable<Transaction> {
        this.logger.log("Request transaction " + id);
        return this.http.get<Transaction>(this.transactionUrl + id);
    }
}