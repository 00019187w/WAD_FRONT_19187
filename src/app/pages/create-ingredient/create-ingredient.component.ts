import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { RecipesType } from '../../Interfaces/RecipeType';
import { IngredientsService } from '../../services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-ingredient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-ingredient.component.html',
  styleUrl: './create-ingredient.component.scss',
})
export class CreateIngredientComponent {
  router = inject(Router);
  recipesService = inject(RecipesService);
  route = inject(ActivatedRoute);
  ingredientsService = inject(IngredientsService);
  ingredients: IngredientsService[] = [];
  recipes: RecipesType[] = [];
  ingredientsId: number = 0;

  ingredientsForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    recipeId: new FormControl(''),
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('ingredientsId')) {
        const id: number = Number(params.get('ingredientsId'));
        this.ingredientsId = id;
        this.ingredientsService.getRecipes(id).subscribe((item: any) => {
          this.ingredientsForm = new FormGroup({
            name: new FormControl(item.name),
            quantity: new FormControl(item.quantity),
            recipeId: new FormControl(item.recipeId),
          });
        });
      }
      this.recipesService.getItems().subscribe((result) => {
        this.recipes = result;
      });
    });
  }

  onSubmit() {
    if (this.ingredientsId) {
      this.ingredientsService
        .updateIngredients(this.ingredientsId, {
          id: this.ingredientsId,
          ...this.ingredientsForm.value,
        })
        .subscribe((_) => {
          this.router.navigateByUrl('ingredients');
        });
    } else {
      this.ingredientsService
        .createIngredients(this.ingredientsForm.value)
        .subscribe((_) => {
          this.router.navigateByUrl('ingredients');
        });
    }
  }
}
