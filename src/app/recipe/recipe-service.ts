import { Injectable } from '@angular/core';
import { RECIPES } from './recipes';
import { Recipe } from './recipe';

@Injectable ({
    providedIn: 'root'
})
export class RecipeService {
    getRecipes() : Recipe[]{
        return RECIPES;
    }
}