
import {Ingredient} from '../shared/ingtrdients.model';
import {EventEmitter} from '@angular/core';
import { Subject } from "rxjs";


export class ShoppingListService {
  
  
  //comment out in order to use subject
  // ingerdientsChanged = new EventEmitter<Ingredient[]>();
  
  
  ingerdientsChanged = new Subject<Ingredient[]>();
  
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
    this.ingerdientsChanged.next(this.ingredients.slice());
  }

  addinIngredients(ingredients: Ingredient[]) {
    //    for (let ingredient of ingredients) {
    //      this.addIngredient(ingredient);
    //  }
    //  }
    this.ingredients.push(...ingredients);
    this.ingerdientsChanged.next(this.ingredients.slice());
  }
}
