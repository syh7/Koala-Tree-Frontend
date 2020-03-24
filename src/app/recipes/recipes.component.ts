import { Component } from '@angular/core';

import { recipes } from '../recipes';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipeComponent {
    recipes = recipes;

    categories = uniqueItems(recipes, 'category');

}

let uniqueItems = function (data, key) {
    let result = [];    
    for (let i = 0; i < data.length; i++) {
        let value = data[i][key];
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    }
    return result;
};