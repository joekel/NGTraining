
import {Ingredient} from '../shared/ingtrdients.model';
import {EventEmitter} from '@angular/core';


export class ShoppingListService {
  ingerdientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tommato', 54),
    new Ingredient('jaboura', 2),
  ];

  getIngerdients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }

  addinIngredients(ingredients: Ingredient[]) {
    //    for (let ingredient of ingredients) {
    //      this.addIngredient(ingredient);
    //  }
    //  }
    this.ingredients.push(...ingredients);
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }
}
