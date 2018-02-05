import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

// @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipesgroup: Recipe[];

  constructor(private recipeService: RecipeService ,  private router: Router , private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipesgroup = this.recipeService.getRecipes();
  }

  
  onNewRecipe(){
    console.log('add new item');
    this.router.navigate(['new'] ,  {relativeTo: this.route})
  
  }
//
//  onRecipeSelected(recipe: Recipe) {
//  this.recipeWasSelected.emit(recipe);
//  }

}
