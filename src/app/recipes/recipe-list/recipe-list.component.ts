import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe }  from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe('Muffin', 'test...', 'https://via.placeholder.com/140x100'),
  //   new Recipe('Pancakes', 'some text...', 'https://via.placeholder.com/140x100')
  // ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
