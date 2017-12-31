import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() rec: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.rec);
  }

}
