
import type { CommunityRecipe } from "../types/community";

interface ApiRecipe {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  reviewCount: number;
  mealType?: string[];
  cuisine: string;
}

interface ApiRecipesResponse {
  recipes: ApiRecipe[];
}

export async function getCommunityRecipes(): Promise<CommunityRecipe[]> {
  const response = await fetch(
    "https://dummyjson.com/recipes?limit=30"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes.");
  }

  const data: ApiRecipesResponse = await response.json();

  return data.recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.name,
    image: recipe.image,
    author: "آشپز Foodora",
    time: recipe.prepTimeMinutes + recipe.cookTimeMinutes,
    cost: 0,
    likes: recipe.reviewCount,
    category: recipe.mealType?.[0] || recipe.cuisine,
  }));
}
