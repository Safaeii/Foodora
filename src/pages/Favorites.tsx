
import { Link } from "react-router-dom";
import {
  Heart,
  Trash2,
  Clock3,
  ChefHat,
  ArrowLeft,
} from "lucide-react";

import { useFavorites } from "../context/useFavorites";

function Favorites() {
  const {
    allFavorites,
    removeFavorite,
    removeCommunityFavorite,
  } = useFavorites();

  function handleRemove(item: (typeof allFavorites)[number]) {
    if (item.type === "meal") {
      removeFavorite(item.data.idMeal);
    } else {
      removeCommunityFavorite(item.data.id);
    }
  }

  return (
    <main
      dir="rtl"
      className="mx-auto min-h-screen max-w-7xl px-4 py-12 md:px-8"
    >
      {/* Page Header */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <Heart size={28} className="fill-[#B85C38] text-[#B85C38]" />

          <h1 className="text-2xl font-black text-[#352820] md:text-3xl">
            علاقه‌مندی‌های من
          </h1>
        </div>

        <p className="text-sm text-[#84786F]">
          تمام غذاها و دستورهای آشپزی ذخیره‌شده شما در یک جا
        </p>

        <span className="mt-4 inline-block rounded-full bg-[#F1E9DF] px-4 py-2 text-sm font-bold text-[#B85C38]">
          {allFavorites.length.toLocaleString("fa-IR")} دستور ذخیره‌شده
        </span>
      </div>

      {/* Empty State */}
      {allFavorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#E9DFD4] bg-[#FFFEFC] px-5 py-20 text-center">
          <Heart size={48} className="mb-5 text-[#C9B9A9]" />

          <h2 className="mb-3 text-xl font-bold text-[#352820]">
            هنوز چیزی ذخیره نکردی!
          </h2>

          <p className="mb-6 text-sm text-[#84786F]">
            غذاها و دستورهای موردعلاقه‌ات رو با زدن قلب ذخیره کن.
          </p>

          <Link
            to="/community"
            className="flex items-center gap-2 rounded-xl bg-[#B85C38] px-6 py-3 font-bold text-white transition hover:bg-[#98482B]"
          >
            مشاهده دستورهای آشپزی
            <ArrowLeft size={18} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allFavorites.map((item) => {
            const isMeal = item.type === "meal";

            const id = isMeal
              ? item.data.idMeal
              : item.data.id;

            const title = isMeal
              ? item.data.strMeal
              : item.data.title;

            const image = isMeal
              ? item.data.strMealThumb
              : item.data.image;

            const link = isMeal
              ? `/meals/${id}`
              : `/community/recipes/${id}`;

            return (
              <article
                key={`${item.type}-${id}`}
                className="group overflow-hidden rounded-3xl border border-[#E9DFD4] bg-[#FFFEFC] transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <Link to={link} className="relative block h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-[#526B45]">
                    {isMeal ? (
                      <Heart size={14} />
                    ) : (
                      <ChefHat size={14} />
                    )}

                    {isMeal ? "غذای معمولی" : "دستور کاربران"}
                  </span>
                </Link>

                {/* Information */}
                <div className="p-5">
                  <h2 className="mb-4 line-clamp-1 text-lg font-black text-[#352820]">
                    {title}
                  </h2>

                  {!isMeal && (
                    <div className="mb-5 flex items-center gap-2 text-sm text-[#84786F]">
                      <Clock3 size={16} />
                      <span>
                        {item.data.time.toLocaleString("fa-IR")} دقیقه
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <Link
                      to={link}
                      className="flex items-center gap-2 rounded-xl bg-[#526B45] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#405536]"
                    >
                      مشاهده دستور
                      <ArrowLeft size={16} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleRemove(item)}
                      aria-label="حذف از علاقه‌مندی‌ها"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-100"
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default Favorites;
