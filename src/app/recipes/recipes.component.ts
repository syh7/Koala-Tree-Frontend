import { Component } from '@angular/core';

import { recipes } from '../recipes';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipeComponent {
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