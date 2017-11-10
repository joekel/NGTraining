import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingtrdients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tommato', 54),
    new Ingredient('jaboura', 2),
  ];
  constructor() {
    console.log('ingredient Array');
  }

  ngOnInit() {
  }


onIngredientAdded(ing: Ingredient) {
   console.log('ingNames - shopping list' + ing.name);
   console.log('ingamount - shopping list' + ing.amount);
this.ingredients.push(ing);
}

}
