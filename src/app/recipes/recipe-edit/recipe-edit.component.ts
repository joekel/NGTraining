import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipes.service";
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validator, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rService: RecipeService , private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
      );
  }

  onAddEngridient() {
    console.log('add ingredient');
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onSubmit() {
    console.log(this.recipeForm);
  //  const newRecipe = new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['inagePath'],this.recipeForm.value['ingredients'])
    if(this.editMode){
       console.log('update')
    this.rService.updateRecipe(this.id,this.recipeForm.value)
    }else{
      console.log('add new one')
    this.rService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);


    if (this.editMode) {
      const recipe = this.rService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagespath;
      recipeDescription = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'inagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients,
    });
  }
  
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route})
  }

}
