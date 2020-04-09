import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { TransactionListComponent } from './accounting/transaction-list/transaction-list.component';
import { NavbarComponent } from './commons/navbar/navbar.component';

const routes : Routes = [
  { path:"recipes", component: RecipeListComponent },
  { path:"accounting", component: TransactionListComponent },
  { path:"", redirectTo: "/accounting", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeListComponent,
    TransactionListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
