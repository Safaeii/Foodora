
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Meal } from "../types/meal";
import RecipeReviews from "../components/RecipeReviews";
import { getMealDetails } from "../services/mealService";
function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
const [loading, setLoading] = useState(!id);

useEffect(() => {
  if (!id) return;

  const mealId = id;
  let isActive = true;

  async function loadMealDetails() {
    setLoading(true);

    try {
      const data = await getMealDetails(mealId);

      if (isActive) {
        setMeal(data);
      }
    } catch (error) {
      console.error("خطا در دریافت اطلاعات غذا:", error);

      if (isActive) {
        setMeal(null);
      }
    } finally {
      if (isActive) {
        setLoading(false);
      }
    }
  }

  loadMealDetails();

  return () => {
    isActive = false;
  };
}, [id]);


  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3E8]">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-[#526B45] text-3xl">
            🍳
          </div>
          <h2 className="font-bold text-[#526B45]">
            در حال آماده‌سازی دستور غذا...
          </h2>
          <p className="mt-2 text-sm text-[#817F73]">
            کمی صبر کن
          </p>
        </div>
      </main>
    );
  }

  if (!meal) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3E8] p-6">
        <div className="max-w-md rounded-3xl border border-[#E6E0D3] bg-white p-8 text-center shadow-sm">
          <div className="mb-4 text-5xl">🍽️</div>

          <h2 className="text-2xl font-black text-[#292D26]">
            غذا پیدا نشد!
          </h2>

          <p className="mt-3 leading-7 text-[#817F73]">
            متأسفانه نتونستیم اطلاعات این غذا رو دریافت کنیم.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-[#526B45] px-6 py-3 font-bold text-white transition hover:bg-[#405536]"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3E8] px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-7 inline-flex items-center gap-3 rounded-xl border border-[#E6E0D3] bg-white px-5 py-3 text-sm font-bold text-[#526B45] shadow-sm transition hover:border-[#526B45] hover:shadow-md"
        >
          <span className="text-lg">→</span>
          بازگشت به دستور پخت‌ها
        </Link>

        {/* Main Card */}
        <article className="overflow-hidden rounded-[2rem] border border-[#E6E0D3] bg-white shadow-sm">

          {/* Image Section */}
          <div className="group relative h-72 overflow-hidden sm:h-[480px]">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#20291E]/90 via-[#20291E]/10 to-transparent" />

            <span className="absolute right-6 top-6 rounded-full border border-white/30 bg-white/90 px-5 py-2 text-sm font-bold text-[#526B45] backdrop-blur-md">
              {meal.strCategory || "دستور پخت"}
            </span>

            <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-10">
              <span className="mb-4 inline-block rounded-lg bg-[#E98945] px-4 py-2 text-xs font-bold text-white">
                پیشنهاد خوشمزه Foodora
              </span>

              <h1 className="max-w-3xl text-3xl font-black leading-relaxed text-white sm:text-5xl">
                {meal.strMeal}
              </h1>

              <p className="mt-3 text-sm text-white/80 sm:text-base">
                یک تجربه خوشمزه برای آشپزخانه شما
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-10">

            {/* Food Information */}
            <section className="mb-12">
              <h2 className="mb-5 text-xl font-black text-[#292D26]">
                درباره این غذا
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-4 rounded-2xl border border-[#E6E0D3] bg-[#F7F3E8] p-5 transition hover:-translate-y-1">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#526B45] text-2xl text-white">
                    🥗
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-[#817F73]">
                      دسته‌بندی غذا
                    </p>
                    <p className="text-lg font-black text-[#526B45]">
                      {meal.strCategory || "نامشخص"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-[#E6E0D3] bg-[#F7F3E8] p-5 transition hover:-translate-y-1">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E98945] text-2xl text-white">
                    🌍
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-[#817F73]">
                      کشور مبدأ
                    </p>
                    <p className="text-lg font-black text-[#292D26]">
                      {meal.strArea || "نامشخص"}
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Instructions */}
            <section>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#526B45] text-2xl text-white">
                  👨‍🍳
                </div>

                <div>
                  <h2 className="text-2xl font-black text-[#292D26]">
                    طرز تهیه غذا
                  </h2>

                  <p className="mt-1 text-sm text-[#817F73]">
                    قدم‌به‌قدم تا آماده شدن غذای شما
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#E6E0D3] bg-[#F7F3E8] p-5 sm:p-8">

                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#E98945]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E98945]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#526B45]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#817F73]" />

                    <span className="mr-2 text-xs font-bold text-[#526B45]">
                      دستور آشپزی
                    </span>
                  </div>

                  <p className="whitespace-pre-line text-justify text-base leading-9 text-[#4A4B42] sm:text-lg sm:leading-10">
                    {meal.strInstructions}
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Section */}
            <div className="mt-12 rounded-3xl bg-[#526B45] p-7 text-center sm:p-10">
              <div className="mb-3 text-4xl">🍊</div>

              <h3 className="text-xl font-black text-white sm:text-2xl">
                وقتشه آشپزی رو شروع کنی!
              </h3>

              <p className="mt-3 text-sm text-white/80">
                دستورهای خوشمزه بیشتری در Foodora منتظر تو هستن.
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3 font-black text-[#526B45] transition hover:-translate-y-1 hover:bg-[#E98945] hover:text-white"
              >
                مشاهده غذاهای بیشتر
                <span>←</span>
              </Link>
            </div>

          </div>
        </article>

        <p className="mt-8 text-center text-sm font-bold text-[#817F73]">
          Foodora | دنیای طعم‌های خوشمزه 🌿
        </p>

      </div>
        <RecipeReviews />
    </main>
  );
}

export default MealDetails;
