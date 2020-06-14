import { GoodreadsChallengeComponent } from './goodreads-challenge/goodreads-challenge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodreadsOverviewComponent } from './goodreads-overview/goodreads-overview.component';
import { GoodreadsRoutingModule } from './goodreads-routing.module';
import { GoodreadsService } from './goodreads-service';

@NgModule({
    imports:[
        CommonModule,
        GoodreadsRoutingModule
    ],
    declarations:[
        GoodreadsChallengeComponent,
        GoodreadsOverviewComponent
    ],
    providers:[
        GoodreadsService
    ]
})
export class GoodreadsModule{}