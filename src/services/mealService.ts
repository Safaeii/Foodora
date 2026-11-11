
import { apiRequest } from "./api";
import type {
  Meal,
  BeefMeal,
  SeafoodMeal,
  VegetarianMeal,
  DessertMeal,
} from "../types/meal";

interface MealDetailsResponse {
  meals: Meal[] | null;
}

export async function getMealDetails(
  id: string
): Promise<Meal | null> {
  const data = await apiRequest<MealDetailsResponse>(
    `lookup.php?i=${encodeURIComponent(id)}`
  );

  return data.meals?.[0] ?? null;
}
export async function searchMeals(
  query: string
): Promise<Meal[]> {
  const data = await apiRequest<MealDetailsResponse>(
    `search.php?s=${encodeURIComponent(query)}`
  );

  return data.meals ?? [];
}
export async function getChickenMeals(): Promise<Meal[]> {
  const data = await apiRequest<MealDetailsResponse>(
    "search.php?s=chicken"
  );

  return data.meals ?? [];
}

export async function getBeefMeals(): Promise<BeefMeal[]> {
  const data = await apiRequest<{
    meals: BeefMeal[] | null;
  }>("filter.php?c=Beef");

  return data.meals ?? [];
}

export async function getSeafoodMeals(): Promise<SeafoodMeal[]> {
  const data = await apiRequest<{
    meals: SeafoodMeal[] | null;
  }>("filter.php?c=Seafood");

  return data.meals ?? [];
}
export async function getVegetarianMeals(): Promise<VegetarianMeal[]> {
  const data = await apiRequest<{
    meals: VegetarianMeal[] | null;
  }>("filter.php?c=Vegetarian");

  return data.meals ?? [];
}

export async function getDessertMeals(): Promise<DessertMeal[]> {
  const data = await apiRequest<{
    meals: DessertMeal[] | null;
  }>("filter.php?c=Dessert");

  return data.meals ?? [];
}