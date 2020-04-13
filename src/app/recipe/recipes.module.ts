import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipes-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        RecipeRoutingModule
    ]
})
export class RecipesModule{}