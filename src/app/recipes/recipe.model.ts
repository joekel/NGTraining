import {Ingredient} from '../shared/ingtrdients.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagespath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagespath = imagePath;
    this.ingredients = ingredients;
  }
}
