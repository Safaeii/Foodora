
export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
}

export interface DetailedMeal extends Meal {
  strCategory: string;
  strArea: string;
  strInstructions: string;
}

export type BeefMeal = Meal;
export type SeafoodMeal = Meal;
export type VegetarianMeal = Meal;
export type DessertMeal = Meal;
