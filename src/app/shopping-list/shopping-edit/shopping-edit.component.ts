import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';

import {Ingredient} from '../../shared/ingtrdients.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
//import { ConfirmationDialog } from './confirm-dialog/confirmation-dialog';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  //  @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();


  //we have to clean the subject on destroy , so we bind it into local prop 
  subscription: Subscription;

  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
 // deletedItem: number;

  //get access to our form
  @ViewChild('f') slForm: NgForm;
  
//  logRef: MdDialogRef<ConfirmationDialog>;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe((index: number) => {
        this.editedItemIndex = index;
      //  this.deletedItem =index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredtient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    //  const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
        this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
        this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  
  onClear(){
   //  if(window.confirm('Are sure you want to clear this item ?')){
    //put your delete method logic here
     this.slForm.reset();
     this.editMode = false;
   //}
    
  }
  
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  
  }
  

  ngOnDestroy() {
    //to avoid memory leak 
    this.subscription.unsubscribe();
  }


}
