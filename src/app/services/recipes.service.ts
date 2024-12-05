import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateRecipes, RecipesType } from '../Interfaces/RecipeType';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiurl = 'https://localhost:7225/api';
  constructor(private http: HttpClient) {}

  getItems(): Observable<RecipesType[]> {
    return this.http.get<RecipesType[]>(this.apiurl + '/Recipes');
  }

  getRecipe(id: number) {
    return this.http.get<RecipesType>(`${this.apiurl}/Recipes/${id}`);
  }

  deleteRecipe(id: number) {
    return this.http.delete(`${this.apiurl}/Recipes/${id}`);
  }

  createRecipe(recipe: any) {
    return this.http.post<CreateRecipes>(`${this.apiurl}/Recipes`, recipe);
  }
  updateRecipe(id: number, recipes: any) {
    return this.http.put(`${this.apiurl}/Recipes/${id}`, recipes);
  }
}
