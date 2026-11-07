import { createContext, useState ,useContext} from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { Meal } from "../types/meal";

 
interface FavoritesContextType {
  favorites: Meal[];
  setFavorites: Dispatch<SetStateAction<Meal[]>>;
  addFavorite: (meal: Meal) => void;
removeFavorite: (id: string) => void;
}


const FavoritesContext = createContext<FavoritesContextType | null>(null);

export default FavoritesContext



export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<Meal[]>([]);

function addFavorite(meal: Meal) {
  setFavorites((prev) => [...prev, meal]);
}

function removeFavorite(id: string) {
  setFavorites((prev) =>
    prev.filter((meal) => meal.idMeal !== id)
  );
}

  return (
  <FavoritesContext.Provider
  value={{
    favorites,
    setFavorites,
    addFavorite,
    removeFavorite,
  }}
>
  {children}
</FavoritesContext.Provider>
  );
}