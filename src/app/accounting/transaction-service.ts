import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Transaction } from './models/transaction';
import { LoggerService } from '../commons/logger/logger-service';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    baseUrl = 'http://localhost:8081/api/';
    transactionUrl = this.baseUrl + 'transactions/';
    
    constructor(private http: HttpClient, private loggerService : LoggerService){ }

    getAllTransactions() : Observable<Transaction[]> {
        this.loggerService.log("Request all transactions");
        return this.http.get<Transaction[]>(this.transactionUrl);
    }

    getTransactionById(id : number) : Observable<Transaction> {
        this.loggerService.log("Request transaction " + id);
        return this.http.get<Transaction>(this.transactionUrl + id);
    }
}