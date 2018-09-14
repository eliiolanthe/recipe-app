import { Component, OnInit } from '@angular/core';
import { Recipe }  from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Muffin', 'test...', 'https://via.placeholder.com/140x100'),
    new Recipe('Pancakes', 'some text...', 'https://via.placeholder.com/140x100')
  ];

  constructor() { }

  ngOnInit() {
  }

}
