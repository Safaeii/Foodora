
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import CommunityHero from "../components/community/ CommunityHero";
import RecipeTabs from "../components/community/RecipeTabs";
import RecipeFilters from "../components/community/RecipeFilters";
import RecipeList from "../components/community/RecipeList";

import type { CommunityRecipe } from "../types/community";
import type { chicken } from "../types/meal";

function CommunityRecipes() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState<CommunityRecipe[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [savedRecipes, setSavedRecipes] = useState<number[]>([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );

        const data = await response.json();

        const meals: chicken[] = data.meals ?? [];

        const formattedRecipes: CommunityRecipe[] = meals.map(
          (meal, index) => ({
            id: Number(meal.idMeal),
            title: meal.strMeal,
            image: meal.strMealThumb,
            author: "آشپز Foodora",
            time: 20 + index * 5,
            cost: 80000 + index * 15000,
            likes: 50 + index * 10,
            category: meal.strCategory || "غذای خوشمزه",
          })
        );

        setRecipes(formattedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    }

    getRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    result = result.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (activeTab === "popular") {
      result.sort((a, b) => b.likes - a.likes);
    }

    if (activeTab === "budget") {
      result.sort((a, b) => a.cost - b.cost);
    }

    if (activeTab === "quick") {
      result.sort((a, b) => a.time - b.time);
    }

    if (sortBy === "popular") {
      result.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === "cheapest") {
      result.sort((a, b) => a.cost - b.cost);
    } else if (sortBy === "quickest") {
      result.sort((a, b) => a.time - b.time);
    }

    return result;
  }, [recipes, searchTerm, activeTab, sortBy]);

  const handleSave = (id: number) => {
    setSavedRecipes((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const handleView = (id: number) => {
    navigate(`/meals/${id}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-96 items-center justify-center bg-[#F7F3E8]">
        <p className="text-lg font-semibold text-[#526B45]">
          در حال دریافت دستورهای غذا...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3E8]">
      <CommunityHero />

      <section id="recipes" className="mx-auto max-w-7xl px-5 py-12 sm:px-10">
        <RecipeTabs activeTab={activeTab} onChange={setActiveTab} />

        <div className="mt-8">
          <RecipeFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <div className="mb-6 mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#292D26]">
            دستورهای آشپزی
          </h2>

          <span className="text-sm text-[#817F73]">
            {filteredRecipes.length} دستور
          </span>
        </div>

        <RecipeList
          recipes={filteredRecipes}
          savedRecipes={savedRecipes}
          onSave={handleSave}
          onView={handleView}
        />
      </section>
    </main>
  );
}

export default CommunityRecipes;
