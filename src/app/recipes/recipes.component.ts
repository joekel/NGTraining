import {Component, OnInit, Provider} from '@angular/core';

import {Recipe} from './recipe.model';
import {RecipeService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  // recipeSelectParent: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // set up listener
//    this.recipeService.recipeSelected.subscribe(
//      (recipe: Recipe) => {
//        this.recipeSelectParent = recipe;
//      }
//    );
  }

}
