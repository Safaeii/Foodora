
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Meal } from "../types/meal";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMealDetails() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const data = await response.json();
        setMeal(data.meals?.[0] ?? null);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات غذا:", error);
        setMeal(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) getMealDetails();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-lime-100 p-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 animate-bounce items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 via-orange-500 to-amber-400 text-4xl shadow-xl shadow-orange-400/30">
            🍳
          </div>
          <h2 className="text-xl font-black text-orange-800">
            داریم غذای خوشمزه‌ات رو آماده می‌کنیم!
          </h2>
          <p className="mt-2 text-sm text-stone-500">یکم صبر کن...</p>
        </div>
      </main>
    );
  }

  if (!meal) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 p-6">
        <div className="max-w-md rounded-3xl border border-orange-200 bg-white p-8 text-center shadow-xl">
          <div className="mb-4 text-6xl">🍽️</div>
          <h2 className="text-2xl font-black text-stone-800">
            غذا پیدا نشد!
          </h2>
          <p className="mt-3 text-stone-500">
            متأسفانه نتونستیم اطلاعات این غذا رو دریافت کنیم.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-orange-300/50"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-50 to-lime-50 px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* دکمه بازگشت */}
        <Link
          to="/"
          className="mb-7 inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-3 font-bold text-orange-700 shadow-sm transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-md"
        >
          <span className="text-xl">←</span>
          بازگشت به دستور پخت‌ها
        </Link>

        {/* کارت اصلی غذا */}
        <article className="overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-xl shadow-orange-900/10">
          {/* تصویر و عنوان */}
          <div className="group relative h-72 overflow-hidden sm:h-[460px]">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-orange-950/10 to-transparent" />

            <div className="absolute right-5 top-5">
              <span className="rounded-full border border-white/30 bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                🍴 دستور پخت ویژه
              </span>
            </div>

            <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-10">
              <span className="mb-3 inline-block rounded-xl bg-lime-400 px-4 py-1.5 text-sm font-black text-green-950 shadow-md">
                ✨ خوشمزه و دوست‌داشتنی
              </span>

              <h1 className="text-3xl font-black leading-relaxed text-white drop-shadow-lg sm:text-5xl">
                {meal.strMeal}
              </h1>

              <p className="mt-3 font-medium text-white/90">
                با عشق بپز، با لذت نوش جان کن! ❤️
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-10">
            {/* اطلاعات غذا */}
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-green-200 bg-gradient-to-l from-lime-100 to-green-50 p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-green-600 text-2xl shadow-md">
                  🥗
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-green-800/70">
                    دسته‌بندی غذا
                  </p>
                  <p className="text-lg font-black text-green-800">
                    {meal.strCategory || "نامشخص"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-gradient-to-l from-amber-100 to-orange-50 p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-2xl text-white shadow-md">
                  🌍
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-orange-800/70">
                    کشور مبدأ
                  </p>
                  <p className="text-lg font-black text-orange-800">
                    {meal.strArea || "نامشخص"}
                  </p>
                </div>
              </div>
            </div>

            {/* طرز تهیه */}
            <section>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-amber-400 text-3xl text-white shadow-lg shadow-orange-500/25">
                  👨‍🍳
                </div>
                <div>
                  <h2 className="text-2xl font-black text-orange-900 sm:text-3xl">
                    طرز تهیه غذا
                  </h2>
                  <p className="mt-1 text-sm text-stone-500">
                    قدم‌به‌قدم تا آماده شدن یک غذای خوشمزه
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 sm:p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-200/40 blur-2xl" />

                <div className="relative">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="mr-2 text-xs font-bold text-orange-700">
                      دستور آشپزی
                    </span>
                  </div>

                  <p className="whitespace-pre-line text-justify text-base leading-9 text-stone-700 sm:text-lg sm:leading-10">
                    {meal.strInstructions}
                  </p>
                </div>
              </div>
            </section>

            {/* بخش پایانی */}
            <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-l from-red-500 via-orange-500 to-amber-400 p-6 text-center shadow-xl shadow-orange-500/20 sm:p-9">
              <div className="mb-3 text-4xl">😋</div>

              <h3 className="text-xl font-black text-white sm:text-2xl">
                وقتشه دست‌به‌کار بشی!
              </h3>

              <p className="mt-2 text-sm text-white/90">
                غذای بعدی رو هم از آشپزخونه پیدا کن.
              </p>

              <Link
                to="/"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-red-600 shadow-md transition hover:-translate-y-1 hover:bg-lime-100 hover:text-green-800 hover:shadow-xl"
              >
                دیدن غذاهای بیشتر
                <span>←</span>
              </Link>
            </div>
          </div>
        </article>

        <p className="mt-8 text-center text-sm font-bold text-orange-800/70">
          🍅 آشپزخونه؛ دنیای خوشمزه‌ها ❤️
        </p>
      </div>
    </main>
  );
}

export default MealDetails;
