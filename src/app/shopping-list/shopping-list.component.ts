import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingtrdients.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ngOnDestroy() {
    //prevent memory leak
    this.subscription.unsubscribe;
  }
  
  
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) {
    console.log('ingredient Array');
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngerdients();
   this.subscription = this.slService.ingerdientsChanged
      .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
      );
  }
  
  onEditItem(index : number){
    this.slService.startedEditing.next(index);
  
  }
  


}
