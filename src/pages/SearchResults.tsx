
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import type { Meal } from "../types/meal";
import { searchMeals } from "../services/mealService";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    let isActive = true;

    async function fetchMeals() {
      setLoading(true);

      try {
        const data = await searchMeals(query);

        if (isActive) {
          setMeals(data);
        }
      } catch (error) {
        console.error("خطا در جست‌وجوی غذا:", error);

        if (isActive) {
          setMeals([]);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchMeals();

    return () => {
      isActive = false;
    };
  }, [query]);

  const displayedMeals = query.trim() ? meals : [];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold">
        نتایج جست‌وجو برای «{query}»
      </h1>

      {loading && <p>در حال جست‌وجو...</p>}

      {!loading && displayedMeals.length === 0 && (
        <p>غذایی پیدا نشد.</p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {displayedMeals.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/meals/${meal.idMeal}`}
            className="overflow-hidden rounded-2xl border border-[#E9DFD4] bg-[#FFFEFC] transition hover:-translate-y-1"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-52 w-full object-cover"
            />

            <h2 className="p-4 font-bold">{meal.strMeal}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default SearchResults;
