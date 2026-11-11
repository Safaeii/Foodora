

import {
  Heart,
  Clock3,
  Wallet,
  ChefHat,
  Utensils,
} from "lucide-react";

interface RecipeCardProps {
  title: string;
  image: string;
  author: string;
  time: number;
  cost: number;
  likes: number;
  category: string;
  isSaved?: boolean;
  onSave?: () => void;
  onView?: () => void;
}

function RecipeCard({
  title,
  image,
  author,
  time,
  cost,
  likes,
  category,
  isSaved = false,
  onSave,
  onView,
}: RecipeCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#E6E0D3] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Recipe Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/F7F3E8/526B45?text=Foodora";
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#526B45] backdrop-blur">
          {category}
        </span>

        <button
          type="button"
          onClick={onSave}
          aria-label={isSaved ? "حذف از علاقه‌مندی‌ها" : "ذخیره دستور غذا"}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition hover:scale-110"
        >
          <Heart
            size={21}
            className={isSaved ? "fill-red-500 text-red-500" : "text-gray-500"}
          />
        </button>
      </div>

      {/* Recipe Information */}
      <div className="p-5">
        <h3 className="mb-3 text-xl font-black text-[#292D26]">
          {title}
        </h3>

        <p className="mb-5 flex items-center gap-2 text-sm text-[#817F73]">
          <ChefHat size={16} />
          آشپز: {author}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#F7F3E8] p-3">
            <p className="flex items-center gap-2 text-xs text-[#817F73]">
              <Clock3 size={15} />
              زمان آماده‌سازی
            </p>

            <p className="mt-2 font-bold text-[#526B45]">
              {time.toLocaleString("fa-IR")} دقیقه
            </p>
          </div>

          <div className="rounded-2xl bg-[#F7F3E8] p-3">
            <p className="flex items-center gap-2 text-xs text-[#817F73]">
              <Wallet size={15} />
              هزینه هر نفر
            </p>

            <p className="mt-2 font-bold text-[#526B45]">
              {cost.toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-bold text-[#E98945]">
            <Heart size={17} />
            {likes.toLocaleString("fa-IR")} پسند
          </span>

          <button
            type="button"
            onClick={onView}
            className="flex items-center gap-2 rounded-xl bg-[#526B45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#405536]"
          >
            <Utensils size={16} />
            مشاهده دستور
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
