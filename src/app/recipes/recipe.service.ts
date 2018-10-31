import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'test...',
      'https://c1.staticflickr.com/2/1691/25037585162_46f45bcc68.jpg',
      [
        new Ingredient('cheese', 1),
        new Ingredient('salami', 200),
        new Ingredient('flour', 100)
      ]
    ),
    new Recipe(
      'Pancakes',
      'some text...',
      'https://c1.staticflickr.com/7/6005/5983510283_73a58c1cb4_b.jpg',
      [
        new Ingredient('milk', 200),
        new Ingredient('egg', 1),
        new Ingredient('flour', 100)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // get a copy of recipes
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}