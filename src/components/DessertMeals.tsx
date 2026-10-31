
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { DessertMeal } from "../types/meal";

function DessertMeals() {
  const [meals, setMeals] = useState<DessertMeal[]>([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
      );

      const data = await response.json();
      setMeals(data.meals ?? []);
    }

    getMeals();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-[#FAE9DE] px-4 py-2 text-sm font-semibold text-[#B85C38]">
            🍰 مجموعه دسرها
          </span>

          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-[#352820] sm:text-4xl">
            دستور پخت دسرهای خوشمزه
          </h1>

          <p className="text-sm leading-7 text-[#84786F] sm:text-base">
            دسرهای خوشمزه و متنوع رو پیدا کن و دستور پختشون رو ببین.
          </p>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {meals.map((meal) => (
            <Link
              key={meal.idMeal}
              to={`/meals/${meal.idMeal}`}
              className="group overflow-hidden rounded-3xl border border-[#E9DFD4] bg-[#FFFEFC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className="mb-4 line-clamp-2 text-lg font-bold leading-8 text-[#352820] transition-colors group-hover:text-[#B85C38]">
                  {meal.strMeal}
                </h2>

                <div className="flex items-center justify-between border-t border-[#E9DFD4] pt-4">
                  <span className="text-sm text-[#687653]">
                    مشاهده دستور پخت
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAE9DE] text-[#B85C38] transition group-hover:bg-[#B85C38] group-hover:text-white">
                    ←
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default DessertMeals;
