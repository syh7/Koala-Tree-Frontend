import { Component } from '@angular/core';

import { recipes } from '../recipes';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes = recipes;

    categories = this.uniqueItems(recipes, 'category');

    public shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    public getRandomRecipe() {
        let index = Math.floor(Math.random() * (recipes.length));
        let recipe = recipes[index];
        let text = recipe.name + ":\n" + recipe.description;
        window.alert(text);
    }

    public uniqueItems(data, key) {
        let result = [];    
        for (let i = 0; i < data.length; i++) {
            let value = data[i][key];
            if (result.indexOf(value) == -1) {
                result.push(value);
            }
        }
        return result;
    }
}