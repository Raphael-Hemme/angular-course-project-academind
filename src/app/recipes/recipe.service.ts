import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

/*     private recipes: Recipe[] = [
        new Recipe('Chef\'s Salad',
            'There is no salad like a chef\'s salad with a tasty chef and lots of tomatos and even the chef\'s dress.',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            [
                new Ingredient('Tomatos', 16),
                new Ingredient('Salad', 1),
                new Ingredient('Chef', 1),
                new Ingredient('Dressing', 3)
            ]),
        new Recipe('Teriaki Chicken Noodles',
            'The chicken was so glad to secrifice itself for the tastiest Teriaki noodle meal',
            'https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Teriaki Sauce', 1),
                new Ingredient('Noodles', 1)
            ])
      ]; */

    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {};

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        console.log('deleting recipe: ' + index);
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}