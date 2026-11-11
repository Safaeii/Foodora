
import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import type { Meal } from "../../types/meal";

interface MealCategoryPageProps {
  title: string;
  badge: string;
  description: string;
  getMeals: () => Promise<Meal[]>;
  loadingMessage?: string;
  emptyMessage?: string;
}

function MealCategoryPage({
  title,
  badge,
  description,
  getMeals,
  loadingMessage = "در حال دریافت غذاها...",
  emptyMessage = "غذایی برای نمایش پیدا نشد.",
}: MealCategoryPageProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function fetchMeals() {
      try {
        setLoading(true);
        setError(false);

        const data = await getMeals();

        if (isActive) {
          setMeals(data);
        }
      } catch (error) {
        console.error("Error fetching meals:", error);

        if (isActive) {
          setError(true);
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
  }, [getMeals]);

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[#687653]/10 px-5 py-2 text-sm font-bold text-[#687653]">
            {badge}
          </span>

          <h1 className="mt-5 text-3xl font-extrabold text-[#352820] md:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#84786F]">
            {description}
          </p>
        </div>

        {loading ? (
          <p className="py-20 text-center text-lg font-bold text-[#687653]">
            {loadingMessage}
          </p>
        ) : error ? (
          <p className="py-20 text-center text-lg font-bold text-red-600">
            دریافت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کنید.
          </p>
        ) : meals.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-lg font-bold text-[#84786F]">
            {emptyMessage}
          </p>
        )}
      </div>
    </main>
  );
}

export default MealCategoryPage;
