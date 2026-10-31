import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { chicken } from "../types/meal";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState<chicken | null>(null);

  useEffect(() => {
    async function getMealDetails() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const data = await response.json();
      setMeal(data.meals?.[0] ?? null);
    }

    getMealDetails();
  }, [id]);

  if (!meal) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF7F2] p-6">
        <p className="rounded-2xl bg-white px-6 py-4 text-[#84786F] shadow-sm">
          در حال دریافت اطلاعات غذا...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-[#E9DFD4] bg-[#FFFEFC] px-5 py-3 text-sm font-semibold text-[#687653] shadow-sm transition hover:border-[#B85C38] hover:text-[#B85C38]"
        >
          <span className="text-lg">←</span>
          بازگشت به دستور پخت‌ها
        </Link>

        <article className="overflow-hidden rounded-3xl border border-[#E9DFD4] bg-[#FFFEFC] shadow-sm">
          <div className="relative">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-64 w-full object-cover sm:h-96"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <h1 className="absolute bottom-6 right-6 left-6 text-2xl font-extrabold leading-relaxed text-white drop-shadow-md sm:bottom-8 sm:right-8 sm:left-8 sm:text-4xl">
              {meal.strMeal}
            </h1>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-10 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-[#F0F1E9] px-5 py-3">
                <p className="mb-1 text-xs text-[#84786F]">
                  دسته‌بندی
                </p>
                <p className="font-bold text-[#687653]">
                  {meal.strCategory}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAE9DE] px-5 py-3">
                <p className="mb-1 text-xs text-[#84786F]">
                  کشور
                </p>
                <p className="font-bold text-[#B85C38]">
                  {meal.strArea}
                </p>
              </div>
            </div>

            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAE9DE] text-xl">
                  🍳
                </span>

                <div>
                  <h2 className="text-2xl font-extrabold text-[#352820]">
                    طرز تهیه
                  </h2>
                  <p className="mt-1 text-sm text-[#84786F]">
                    مراحل آماده‌سازی غذا
                  </p>
                </div>
              </div>

              <p className="whitespace-pre-line text-justify text-base leading-9 text-[#62564D] sm:text-lg">
                {meal.strInstructions}
              </p>
            </section>

            <div className="mt-10 border-t border-[#E9DFD4] pt-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl bg-[#B85C38] px-6 py-3 font-bold text-white transition hover:bg-[#98482B]"
              >
                مشاهده دستور پخت‌های دیگر
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default MealDetails;