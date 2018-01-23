import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipeDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    //this is how to make the id dynamic 
    this.route.params
      .subscribe(
      (params: Params) => {
        //we did add plus in front of params to cast String to number
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      }

      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeDetail.ingredients);
  }

}
