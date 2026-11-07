
import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

import type { Meal } from "../types/meal";
import type { CommunityRecipe } from "../types/community";

// نوع مشترک علاقه‌مندی‌ها
export type FavoriteItem =
  | {
      type: "meal";
      data: Meal;
    }
  | {
      type: "community";
      data: CommunityRecipe;
    };

interface FavoritesContextType {
  // غذاهای معمولی
  favorites: Meal[];
  setFavorites: Dispatch<SetStateAction<Meal[]>>;
  addFavorite: (meal: Meal) => void;
  removeFavorite: (id: string) => void;

  // دستورهای آشپزی کاربران
  communityFavorites: CommunityRecipe[];
  addCommunityFavorite: (recipe: CommunityRecipe) => void;
  removeCommunityFavorite: (id: number) => void;

  // لیست مشترک هر دو نوع
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

  // ترکیب هر دو لیست در یک لیست مشترک
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

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    );
  }

  return context;
}
