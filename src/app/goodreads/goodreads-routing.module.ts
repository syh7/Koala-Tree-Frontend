import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodreadsOverviewComponent } from './goodreads-overview/goodreads-overview.component';
import { GoodreadsChallengeComponent } from './goodreads-challenge/goodreads-challenge.component';

const routes: Routes = [
    { path: "/challenge", component: GoodreadsChallengeComponent },
    { path: "**", component: GoodreadsOverviewComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class GoodreadsRoutingModule { }