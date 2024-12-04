export interface Recipe {
  id: number;
  name: string;
  description: string;
  preparationTime: number;
  servings: number;
}
export interface IngredientsType {
  id: number;
  name: string;
  quantity: number;
  recipeId: number;
  recipe: Recipe;
}

export interface CreateIngredient {
  name: string;
  quantity: number;
  recipeId: number;
}
