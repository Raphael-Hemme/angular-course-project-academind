import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredient[]) {
    /*  for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        } */
        this.ingredients.push(...ingredients, );
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}