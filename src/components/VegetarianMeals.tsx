
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { VegetarianMeal } from "../types/meal";

function VegetarianMeals() {
  const [meals, setMeals] = useState<VegetarianMeal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
        );

        const data = await response.json();
        setMeals(data.meals ?? []);
      } catch (error) {
        console.error("Error fetching vegetarian meals:", error);
      } finally {
        setLoading(false);
      }
    }

    getMeals();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-96 items-center justify-center bg-[#F7F3E8]">
        <p className="text-lg font-semibold text-[#526B45]">
          در حال دریافت غذاهای گیاهی...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3E8] px-5 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-12">
          <span className="mb-3 inline-block rounded-full bg-[#526B45]/10 px-4 py-2 text-sm font-semibold text-[#526B45]">
            🥦 مجموعه غذاهای گیاهی
          </span>

          <h1 className="text-3xl font-black text-[#292D26] sm:text-4xl">
            دنیای غذاهای گیاهی
          </h1>

          <p className="mt-4 max-w-xl leading-8 text-[#817F73]">
            با مجموعه‌ای از غذاهای گیاهی خوشمزه و متنوع، تجربه‌ای تازه در آشپزی داشته باش.
          </p>
        </div>

        {/* Vegetarian Meals Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {meals.map((meal) => (
            <Link
              key={meal.idMeal}
              to={`/meals/${meal.idMeal}`}
              className="group overflow-hidden rounded-3xl border border-[#E6E0D3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute right-4 top-4 rounded-full bg-[#526B45] px-4 py-2 text-xs font-bold text-white shadow-md">
                  غذای گیاهی
                </span>

                <div className="absolute bottom-4 right-5 left-5">
                  <p className="text-sm font-medium text-white/80">
                    طعم طبیعت
                  </p>

                  <h2 className="mt-2 line-clamp-2 text-xl font-extrabold text-white">
                    {meal.strMeal}
                  </h2>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">

                <div className="flex items-center justify-between border-b border-[#E6E0D3] pb-4 text-sm text-[#817F73]">
                  <span>🥦 غذاهای گیاهی</span>
                  <span>🍽 دستور پخت</span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#526B45]">
                    مشاهده دستور پخت
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#526B45]/10 text-xl text-[#526B45] transition-all duration-300 group-hover:bg-[#526B45] group-hover:text-white">
                    ←
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {meals.length === 0 && (
          <p className="py-16 text-center text-[#817F73]">
            در حال حاضر غذای گیاهی برای نمایش وجود ندارد.
          </p>
        )}

      </div>
    </main>
  );
}

export default VegetarianMeals;
