import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodreadsOverviewComponent } from './goodreads-overview/goodreads-overview.component';

const routes: Routes = [
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