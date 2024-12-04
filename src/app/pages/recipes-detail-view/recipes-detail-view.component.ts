import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RecipesType } from '../../Interfaces/RecipeType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './recipes-detail-view.component.html',
  styleUrl: './recipes-detail-view.component.scss',
})
export class RecipesDetailViewComponent {
  recipesService = inject(RecipesService);
  recipesDetail: RecipesType = {
    id: 0,
    name: '',
    description: '',
    preparationTime: 0,
    servings: 0,
  };
  route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.recipesService.getRecipe(id).subscribe((item: RecipesType) => {
      this.recipesDetail = item;
    });
  }
}
