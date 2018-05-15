

import {Ingredient} from '../shared/ingtrdients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();

  
  recioesChanges = new Subject<Recipe[]>();
  private recipesgroup: Recipe[] = [
    new Recipe(
      'Book Jaber 01',
      ' test Description 01',
      'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Frensh Fries', 20),
      ]
    ),
    new Recipe(
      'Book Jaber 02',
      ' test Description 02',
      'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      [
        new Ingredient('salt', 2),
        new Ingredient('Peper', 4),
      ]
    ),
    new Recipe(
      'Book Jaber 03',
      ' test Description 03',
      'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Frensh Fries', 20),
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipesgroup.slice();
  }

  getRecipe(index: number) {
    return this.recipesgroup.slice()[index];
  }
  onSelected() {

  }

  addIngredientToShoppingList(ingredis: Ingredient[]) {
    this.slService.addinIngredients(ingredis);
  }

  addRecipe(recipe: Recipe) {
    this.recipesgroup.push(recipe);
    this.recioesChanges.next(this.recipesgroup.slice());

  }

  updateRecipe(index: number ,newrecipe: Recipe) {
  this.recipesgroup[index] = newrecipe;
  }

  
  deleteRecipe(index: number ){
    this.recipesgroup.splice(index,1);
     this.recioesChanges.next(this.recipesgroup.slice())
  }

}
