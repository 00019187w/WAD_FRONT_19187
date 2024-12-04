import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RecipesType } from '../../Interfaces/RecipeType';
import { ActivatedRoute } from '@angular/router';
import { IngredientsType } from '../../Interfaces/Ingredients';
import { IngredientsService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-detail-view.component.html',
  styleUrl: './ingredient-detail-view.component.scss',
})
export class IngredientDetailViewComponent {
  ingredientsService = inject(IngredientsService);
  ingredientsDetail: IngredientsType = {
    id: 0,
    name: '',
    quantity: 0,
    recipeId: 0,
    recipe: {
      id: 0,
      name: '',
      description: '',
      preparationTime: 0,
      servings: 0,
    },
  };

  route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.ingredientsService
      .getRecipes(id)
      .subscribe((item: IngredientsType) => {
        this.ingredientsDetail = item;
      });
  }
}
