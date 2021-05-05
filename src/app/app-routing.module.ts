// Angular imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// App components
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { RecipesComponent } from "./recipes/recipes.component";
import { PromptForSelectionComponent } from './recipes/prompt-for-selection/prompt-for-selection.component';
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes/recipe-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuardService } from "./auth/auth-guard.service";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', component: PromptForSelectionComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
        ] 
    },
    { path: 'shoppinglist', component: ShoppingListComponent, pathMatch: 'full' },
    { path: 'authentication', component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}