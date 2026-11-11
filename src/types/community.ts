
export interface CommunityRecipe {
  id: number;
  title: string;
  image: string;
  author: string;
  time: number;
  cost: number;
  likes: number;
  category: string;
}

export type RecipeCategory =
  | "all"
  | "popular"
  | "latest"
  | "budget"
  | "quick"
  | "healthy";

export type RecipeTab = "popular" | "latest" | "budget";

export type CommunityMealCategory =
  | "all"
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Dessert"
  | "Snack";

export type RecipeSort =
  | "latest"
  | "popular"
  | "cheapest"
  | "quickest";
