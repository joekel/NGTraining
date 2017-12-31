import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

// @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipesgroup: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipesgroup = this.recipeService.getRecipes();
  }

//
//  onRecipeSelected(recipe: Recipe) {
//  this.recipeWasSelected.emit(recipe);
//  }

}
