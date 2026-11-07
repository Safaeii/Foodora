import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChefHat,
  Clock,
  Wallet,
  Heart,
  UtensilsCrossed,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

import CommunityHero from "../components/community/ CommunityHero";
import RecipeTabs from "../components/community/RecipeTabs";
import RecipeFilters from "../components/community/RecipeFilters";
import RecipeList from "../components/community/RecipeList";

import { useFavorites } from "../context/FavoritesContext";
import type { CommunityRecipe } from "../types/community";

function CommunityRecipes() {
  const navigate = useNavigate();

  const {
    communityFavorites,
    addCommunityFavorite,
    removeCommunityFavorite,
  } = useFavorites();

  const [recipes, setRecipes] = useState<CommunityRecipe[]>([]);
  const [activeTab, setActiveTab] = useState("popular");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/recipes?limit=30"
        );

        if (!response.ok) {
          throw new Error("دریافت دستورهای آشپزی ناموفق بود.");
        }

        const data = await response.json();

        const formattedRecipes: CommunityRecipe[] = data.recipes.map(
          (recipe: any) => ({
            id: recipe.id,
            title: recipe.name,
            image: recipe.image,
            author: "آشپز Foodora",
            time: recipe.prepTimeMinutes + recipe.cookTimeMinutes,
            cost: 0,
            likes: recipe.reviewCount,
            category: recipe.mealType?.[0] || recipe.cuisine,
          })
        );

        setRecipes(formattedRecipes);
      } catch (err) {
        setError("مشکلی در دریافت دستورهای آشپزی پیش آمده است.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  const savedRecipes = communityFavorites.map((recipe) => recipe.id);
function handleSave(id: number) {
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) return;

  const isSaved = savedRecipes.includes(id);

  if (isSaved) {
    removeCommunityFavorite(id);
  } else {
    addCommunityFavorite(recipe);
  }
}

  function handleView(id: number) {
    navigate(`/community/recipes/${id}`);
  }

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    if (selectedCategory !== "all") {
      result = result.filter(
        (recipe) => recipe.category === selectedCategory
      );
    }

    if (activeTab === "popular" || sortBy === "popular") {
      result.sort((a, b) => b.likes - a.likes);
    } else if (activeTab === "latest" || sortBy === "latest") {
      result.sort((a, b) => b.id - a.id);
    } else if (activeTab === "budget" || sortBy === "cheapest") {
      result.sort((a, b) => a.cost - b.cost);
    }

    return result;
  }, [recipes, activeTab, sortBy, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#352820]">
      <CommunityHero />

      <section
        id="recipes"
        className="mx-auto max-w-7xl px-4 py-12 md:px-8"
      >
        <div className="mb-8 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <ChefHat size={26} className="text-[#B85C38]" />

            <h1 className="text-2xl font-bold md:text-3xl">
              دستورهای آشپزی کاربران
            </h1>
          </div>

          <p className="text-sm text-[#84786F]">
            مجموعه‌ای از دستورهای آشپزی برای تجربه طعم‌های جدید
          </p>

          <div className="flex items-center gap-2 text-sm text-[#687653]">
            <UtensilsCrossed size={17} />

            <span>
              {recipes.length} دستور آشپزی
            </span>
          </div>
        </div>

        <RecipeTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <RecipeFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {loading && (
          <div className="flex items-center justify-center gap-3 py-20 text-[#B85C38]">
            <LoaderCircle
              size={22}
              className="animate-spin"
            />

            <span>در حال دریافت دستورهای آشپزی...</span>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center gap-2 py-12 text-red-600">
            <AlertCircle size={20} />

            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <RecipeList
            recipes={filteredRecipes}
            savedRecipes={savedRecipes}
            onSave={handleSave}
            onView={handleView}
          />
        )}
      </section>
    </main>
  );
}

export default CommunityRecipes;