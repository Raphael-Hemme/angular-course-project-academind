import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chef\'s Salad',
            'There is no salad like a chef\'s salad with a tasty chef and lots of tomatos and even the chef\'s dress.',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            [
                new Ingredient('Tomatos', 16),
                new Ingredient('Salad', 1),
                new Ingredient('Chef', 1.5),
                new Ingredient('Dressing', 3)
            ]),
        new Recipe('Teriaki Chicken Noodles',
            'The chicken was so glad to secrifice itself for the tastiest Teriaki noodle meal',
            'https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Teriaki Sauce', 1),
                new Ingredient('Noodles', 1.5)
            ])
      ];

    constructor(private shoppingListService: ShoppingListService) {};

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}