import { Component } from '@angular/core';
import { IngredientsType } from '../../Interfaces/Ingredients';
import { TableComponent } from '../../components/Table/table.component';
import { IngredientsService } from '../../services/ingredient.service';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';

@Component({
  selector: 'app-participants',
  standalone: true,
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
  imports: [TableComponent],
})
export class IngredientsComponent {
  participantsItems: IngredientsType[] = [];

  constructor(private participantService: IngredientsService) {}

  ngOnInit(): void {
    this.participantService.getItems().subscribe((item) => {
      this.participantsItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Name',
      key: 'name',
    },
    {
      label: 'Quantity',
      key: 'quantity',
    },
  ];
}
