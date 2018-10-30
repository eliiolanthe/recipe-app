import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Muffin', 'test...', 'https://via.placeholder.com/140x100'),
    new Recipe('Pancakes', 'some text...', 'https://via.placeholder.com/140x100')
  ];

  getRecipes() {
    return this.recipes.slice(); // get a copy of recipes
  }
}