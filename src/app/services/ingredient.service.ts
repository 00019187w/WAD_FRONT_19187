import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateIngredient, IngredientsType } from '../Interfaces/Ingredients';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private apiurl = 'http://localhost:5091/api';
  constructor(private http: HttpClient) {}
  getItems(): Observable<IngredientsType[]> {
    return this.http.get<IngredientsType[]>(this.apiurl + '/Ingredients');
  }

  getRecipes(id: number) {
    return this.http.get<IngredientsType>(`${this.apiurl}/Ingredients/${id}`);
  }

  deleteIngredients(id: number) {
    return this.http.delete(`${this.apiurl}/Ingredients/${id}`);
  }

  createIngredients(ingredients: any) {
    return this.http.post<CreateIngredient>(
      `${this.apiurl}/Ingredients`,
      ingredients
    );
  }
  updateIngredients(id: number, recipes: any) {
    return this.http.put(`${this.apiurl}/Ingredients/${id}`, recipes);
  }
}
