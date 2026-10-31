import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { chicken } from "../types/meal";

function chicken() {
  const [meals, setMeals] = useState<chicken[]>([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );

      const data = await response.json();
      setMeals(data.meals ?? []);
    }

    getMeals();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5EFE6] p-6 sm:p-10">
      <h1 className="mb-8 text-3xl font-bold text-[#C97B4A]">
        دستور پخت غذاها 🍳
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/meals/${meal.idMeal}`}
            className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="mb-3 text-xl font-bold text-[#C97B4A]">
                {meal.strMeal}
              </h2>

              <p className="mb-2 text-[#8C9A96]">
                دسته‌بندی: {meal.strCategory}
              </p>

              <p className="text-[#8C9A96]">
                کشور: {meal.strArea}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default chicken;