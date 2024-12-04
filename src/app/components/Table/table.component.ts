import { Component, Input, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { IngredientsType } from '../../Interfaces/Ingredients';
import { RecipesType } from '../../Interfaces/RecipeType';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RecipesService } from '../../services/recipes.service';
import { IngredientsService } from '../../services/ingredient.service';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [MatTableModule],
})
export class TableComponent {
  router = inject(Router);
  location = inject(Location);
  recipeservice = inject(RecipesService);
  ingredientsService = inject(IngredientsService);

  @Input()
  dataWarehouse: (IngredientsType | RecipesType)[] = [];

  @Input()
  displayedColumns: TableColumnTypes[] = [];

  displayedColumnsStr: string[] = [];

  ngOnChanges() {
    this.displayedColumnsStr = this.displayedColumns.map((item) => item.key);
    this.displayedColumnsStr.unshift('No');
    this.displayedColumnsStr.push('Actions');
  }

  EditClicked(id: number) {
    const route = this.location.path().slice(1);
    this.router.navigateByUrl(`create-${route}?${route}Id=${id}`);
  }

  DetailsClicked(id: number) {
    this.router.navigateByUrl(this.location.path() + '/' + id);
  }

  DeleteClicked(id: number) {
    if (this.location.path() === '/recipes') {
      this.recipeservice.deleteRecipe(id).subscribe((_) => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id);
      });
    }

    if (this.location.path() === '/ingredients') {
      this.ingredientsService.deleteIngredients(id).subscribe((_) => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id);
      });
    }
  }
}
