import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CreateRecipesComponent } from './pages/create-recipes/create-recipes.component';
import { CreateIngredientComponent } from './pages/create-ingredient/create-ingredient.component';
import { RecipesDetailViewComponent } from './pages/recipes-detail-view/recipes-detail-view.component';
import { IngredientDetailViewComponent } from './pages/ingredient-detail-view/ingredient-detail-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'create-recipes',
    component: CreateRecipesComponent,
  },
  {
    path: 'create-ingredients',
    component: CreateIngredientComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipesDetailViewComponent,
  },
  {
    path: 'ingredients/:id',
    component: IngredientDetailViewComponent,
  },
];
