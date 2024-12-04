import { Component } from '@angular/core';
import { RecipesType } from '../../Interfaces/RecipeType';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { TableComponent } from '../../components/Table/table.component';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  imports: [TableComponent],
})
export class RecipesComponent {
  recipeItems: RecipesType[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getItems().subscribe((item) => {
      this.recipeItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Name',
      key: 'name',
    },
    {
      label: 'Description',
      key: 'description',
    },
    {
      label: 'Preparation time',
      key: 'preparationTime',
    },
    {
      label: 'Serving ',
      key: 'servings',
    },
  ];
}
