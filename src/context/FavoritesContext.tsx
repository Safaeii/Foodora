
import { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

import type { Meal } from "../types/meal";
import type { CommunityRecipe } from "../types/community";

// Shared type for both favorite categories
export type FavoriteItem =
  | {
      type: "meal";
      data: Meal;
    }
  | {
      type: "community";
      data: CommunityRecipe;
    };

export interface FavoritesContextType {
  // Regular meals
  favorites: Meal[];
  setFavorites: Dispatch<SetStateAction<Meal[]>>;
  addFavorite: (meal: Meal) => void;
  removeFavorite: (id: string) => void;

  // Community recipes
  communityFavorites: CommunityRecipe[];
  addCommunityFavorite: (recipe: CommunityRecipe) => void;
  removeCommunityFavorite: (id: number) => void;

  // Combined list of both favorite types
  allFavorites: FavoriteItem[];
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export default FavoritesContext;

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<Meal[]>([]);
  const [communityFavorites, setCommunityFavorites] = useState<
    CommunityRecipe[]
  >([]);

  function addFavorite(meal: Meal) {
    setFavorites((prev) => {
      const exists = prev.some(
        (item) => item.idMeal === meal.idMeal
      );

      return exists ? prev : [...prev, meal];
    });
  }

  function removeFavorite(id: string) {
    setFavorites((prev) =>
      prev.filter((meal) => meal.idMeal !== id)
    );
  }

  function addCommunityFavorite(recipe: CommunityRecipe) {
    setCommunityFavorites((prev) => {
      const exists = prev.some(
        (item) => item.id === recipe.id
      );

      return exists ? prev : [...prev, recipe];
    });
  }

  function removeCommunityFavorite(id: number) {
    setCommunityFavorites((prev) =>
      prev.filter((recipe) => recipe.id !== id)
    );
  }

  // Combine both favorite lists
  const allFavorites: FavoriteItem[] = [
    ...favorites.map((meal) => ({
      type: "meal" as const,
      data: meal,
    })),
    ...communityFavorites.map((recipe) => ({
      type: "community" as const,
      data: recipe,
    })),
  ];

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
        communityFavorites,
        addCommunityFavorite,
        removeCommunityFavorite,
        allFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
