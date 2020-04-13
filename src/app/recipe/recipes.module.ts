import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipes-routing.module';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
    imports:[
        CommonModule,
        RecipeRoutingModule
    ],
    declarations:[
        RecipeListComponent
    ]
})
export class RecipesModule{}