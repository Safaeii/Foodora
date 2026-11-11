
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChefHat,
  UtensilsCrossed,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

import CommunityHero from "../components/community/CommunityHero";
import RecipeTabs from "../components/community/RecipeTabs"  
import RecipeFilters from "../components/community/RecipeFilters";
import RecipeList from "../components/community/RecipeList";

import { useFavorites } from "../hooks/useFavorites";
import { getCommunityRecipes } from "../services/communityService";

import type {
  CommunityRecipe,
  RecipeTab,
  RecipeSort,
  CommunityMealCategory,
} from "../types/community";

function CommunityRecipes() {
  const navigate = useNavigate();

  const {
    communityFavorites,
    addCommunityFavorite,
    removeCommunityFavorite,
  } = useFavorites();

  // Recipes state
  const [recipes, setRecipes] = useState<CommunityRecipe[]>([]);

  // Filter states
  const [activeTab, setActiveTab] =
    useState<RecipeTab>("popular");

  const [sortBy, setSortBy] =
    useState<RecipeSort>("popular");

  const [selectedCategory, setSelectedCategory] =
    useState<CommunityMealCategory>("all");

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch community recipes
  useEffect(() => {
    let isActive = true;

    async function fetchRecipes() {
      try {
        const data = await getCommunityRecipes();

        if (isActive) {
          setRecipes(data);
        }
      } catch (error) {
        console.error("Error fetching community recipes:", error);

        if (isActive) {
          setError("مشکلی در دریافت دستورهای آشپزی پیش آمده است.");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchRecipes();

    return () => {
      isActive = false;
    };
  }, []);

  // Get saved recipe IDs
  const savedRecipes = communityFavorites.map(
    (recipe) => recipe.id
  );

  // Save or remove favorite
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

  // Navigate to recipe details
  function handleView(id: number) {
    navigate(`/community/recipes/${id}`);
  }

  // Handle tab changes
  function handleTabChange(tab: RecipeTab) {
    setActiveTab(tab);

    const sortOptions: Record<RecipeTab, RecipeSort> = {
      popular: "popular",
      latest: "latest",
      budget: "cheapest",
    };

    setSortBy(sortOptions[tab]);
  }

  // Filter and sort recipes
  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (recipe) => recipe.category === selectedCategory
      );
    }

    // Sort recipes
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.likes - a.likes);
        break;

      case "latest":
        result.sort((a, b) => b.id - a.id);
        break;

      case "cheapest":
        result.sort((a, b) => a.cost - b.cost);
        break;

      case "quickest":
        result.sort((a, b) => a.time - b.time);
        break;
    }

    return result;
  }, [recipes, sortBy, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#352820]">
      <CommunityHero />

      <section
        id="recipes"
        className="mx-auto max-w-7xl px-4 py-12 md:px-8"
      >
        <div className="mb-8 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <ChefHat
              size={26}
              className="text-[#B85C38]"
            />

            <h1 className="text-2xl font-bold md:text-3xl">
              دستورهای آشپزی کاربران
            </h1>
          </div>

          <p className="text-sm text-[#84786F]">
            مجموعه‌ای از دستورهای آشپزی برای تجربه طعم‌های جدید
          </p>

          <div className="flex items-center gap-2 text-sm text-[#687653]">
            <UtensilsCrossed size={17} />
            <span>{recipes.length} دستور آشپزی</span>
          </div>
        </div>

        <RecipeTabs
          activeTab={activeTab}
          setActiveTab={handleTabChange}
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
