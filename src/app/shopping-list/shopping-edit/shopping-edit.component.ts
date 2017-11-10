import { Component, OnInit , ElementRef , ViewChild  ,  EventEmitter , Output} from '@angular/core';

import {Ingredient} from '../../shared/ingtrdients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();



  constructor() { }

  ngOnInit() {
  }

  onAddItem() {

 const ingName = this.nameInputRef.nativeElement.value;
 console.log('ingNames ' + ingName);
    const ingAmount = this.amountInputRef.nativeElement.value;
     console.log('ingAmount ' + ingAmount);
    const newIngredient = new Ingredient(ingName, ingAmount);
     console.log('newIngredient ' + newIngredient);
    this.ingredientAdded.emit(newIngredient);
  }
}
