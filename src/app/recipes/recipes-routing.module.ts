import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { AuthGuardService } from "../auth/auth-guard.service";
import { PromptForSelectionComponent } from "./prompt-for-selection/prompt-for-selection.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipe-resolver.service";
import { RecipesComponent } from "./recipes.component";


const routes: Routes = [
  { path: '',
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    children: [
        { path: '', component: PromptForSelectionComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ] 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class RecipesRoutingModule {

}