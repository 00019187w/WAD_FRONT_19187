import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesType } from '../../Interfaces/RecipeType';

@Component({
  selector: 'app-create-recipes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-recipes.component.html',
  styleUrl: './create-recipes.component.scss',
})
export class CreateRecipesComponent {
  @Input()
  recipesDetail!: RecipesType;

  recipeId: number = 0;

  router = inject(Router);
  recipesService = inject(RecipesService);
  route = inject(ActivatedRoute);

  recipesForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    preparationTime: new FormControl(''),
    servings: new FormControl(''),
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('recipesId')) {
        const id: number = Number(params.get('recipesId'));
        this.recipeId = id;
        this.recipesService.getRecipe(id).subscribe((item: any) => {
          this.recipesForm = new FormGroup({
            name: new FormControl(item.name),
            description: new FormControl(item.description),
            preparationTime: new FormControl(item.preparationTime),
            servings: new FormControl(item.servings),
          });
        });
      }
    });
  }

  onSubmit() {
    if (this.recipeId) {
      this.recipesService
        .updateRecipe(this.recipeId, {
          id: this.recipeId,
          ...this.recipesForm.value,
        })
        .subscribe((_) => {
          this.router.navigateByUrl('recipes');
        });
    } else {
      this.recipesService
        .createRecipe(this.recipesForm.value)
        .subscribe((_) => {
          this.router.navigateByUrl('recipes');
        });
    }
  }
}
