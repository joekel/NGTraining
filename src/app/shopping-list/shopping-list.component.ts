import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingtrdients.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {
    console.log('ingredient Array');
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngerdients();
    this.slService.ingerdientsChanged
      .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
      );
  }


}
