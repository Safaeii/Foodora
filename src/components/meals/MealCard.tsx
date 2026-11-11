
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Meal } from "../../types/meal";
import { useFavorites } from "../../hooks/useFavorites";

interface MealCardProps {
  meal: Meal;
}

function MealCard({ meal }: MealCardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some(
    (item) => item.idMeal === meal.idMeal
  );

  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E6E0D3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link to={`/meals/${meal.idMeal}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <span className="absolute right-4 top-4 rounded-full bg-[#526B45] px-4 py-2 text-xs font-bold text-white shadow-md">
            غذای خوشمزه
          </span>

          <div className="absolute bottom-4 right-5 left-5">
            <p className="text-sm font-medium text-white/80">
              دستور پخت خانگی
            </p>

            <h2 className="mt-2 line-clamp-2 text-xl font-extrabold text-white">
              {meal.strMeal}
            </h2>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between border-b border-[#E6E0D3] pb-4 text-sm text-[#817F73]">
            <span>🍽 دستور پخت</span>
            <span>🥘 غذای خانگی</span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-bold text-[#526B45]">
              مشاهده دستور پخت
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E98945]/15 text-xl text-[#E98945] transition-all duration-300 group-hover:bg-[#E98945] group-hover:text-white">
              ←
            </span>
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={() =>
            isFavorite
              ? removeFavorite(meal.idMeal)
              : addFavorite(meal)
          }
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E6E0D3] py-3 text-sm font-bold transition-colors hover:bg-[#F7F3E8]"
        >
          <Heart
            size={20}
            className={
              isFavorite
                ? "fill-[#B85C38] text-[#B85C38]"
                : "text-[#B85C38]"
            }
          />

          <span className="text-[#526B45]">
            {isFavorite
              ? "حذف از علاقه‌مندی‌ها"
              : "افزودن به علاقه‌مندی‌ها"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default MealCard;
