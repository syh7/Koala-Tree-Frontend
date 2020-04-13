import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: "recipes", loadChildren: () => import('./recipe/recipes.module').then(m => m.RecipesModule) },
    { path: "accounting", loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule) },
    { path: "**", redirectTo: "/accounting"},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }