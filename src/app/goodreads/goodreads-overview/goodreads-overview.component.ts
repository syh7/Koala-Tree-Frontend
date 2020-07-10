import { Component, OnInit } from '@angular/core';
import { GoodreadsService } from '../goodreads-service';
import { LoggerService } from 'src/app/commons/logger/logger-service';

@Component({
    selector: 'app-goodreads-overview',
    templateUrl: './goodreads-overview.component.html',
    styleUrls: ['./goodreads-overview.component.css']
})
export class GoodreadsOverviewComponent implements OnInit {

    public userid: string;

    constructor(private service: GoodreadsService, private logger: LoggerService) {
    }

    public ngOnInit() {
        this.logger.log("ngOnInit");
        this.service.getOAuthToken()
            .subscribe((data) => this.userid = data);
    }

}