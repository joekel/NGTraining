
import {Ingredient} from '../shared/ingtrdients.model';
import {EventEmitter} from '@angular/core';
import { Subject } from "rxjs";


export class ShoppingListService {
  
  
  //comment out in order to use subject
  // ingerdientsChanged = new EventEmitter<Ingredient[]>();
  
  
  ingerdientsChanged = new Subject<Ingredient[]>();
  
  // subject listen to listen to edit component
   startedEditing = new Subject<number>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tommato', 54),
    new Ingredient('jaboura', 2),
  ];

  getIngerdients() {
    return this.ingredients.slice();
  }
  
  getIngredtient(index: number){
  return this.ingredients[index];
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
  
  updateIngredient(index: number , newIngredient: Ingredient){
   //real life secanrio we update database
    this.ingredients[index] = newIngredient;
    this.ingerdientsChanged.next(this.ingredients.slice());
  }
  
  
   deleteIngredient(index: number ){
   //real life secanrio we update database
    this.ingredients.splice(index,1);
     this.ingerdientsChanged.next(this.ingredients.slice());
  }
  
  
}
