export interface RecipesType {
  id: number;
  name: string;
  description: string;
  preparationTime: number;
  servings: number;
}

export interface CreateRecipes {
  name: string;
  description: string;
  preparationTime: number;
  servings: number;
}
