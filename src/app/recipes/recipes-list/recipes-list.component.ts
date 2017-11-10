import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipesgroup: Recipe[] = [
    new Recipe('Book Jaber 01', ' test Description 01',
     'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'),
     new Recipe('Book Jaber 02', ' test Description 02',
     'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'),
     new Recipe('Book Jaber 03', ' test Description 03',
     'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }

}
