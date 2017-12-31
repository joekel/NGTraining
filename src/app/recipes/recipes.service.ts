

import {Ingredient} from '../shared/ingtrdients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

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
  onSelected() {

  }

  addIngredientToShoppingList(ingredis: Ingredient[]) {
    this.slService.addinIngredients(ingredis);
  }

}
