
import { useState } from "react";
import {
  Search,
  Heart,
  Clock,
  Trash2,
  Bookmark,
  ChefHat,
  Eye,
} from "lucide-react";

interface SavedRecipe {
  id: number;
  title: string;
  category: string;
  image: string;
  time: number;
  likes: number;
  views: number;
}

const initialRecipes: SavedRecipe[] = [
  {
    id: 1,
    title: "پاستا آلفردو",
    category: "غذای اصلی",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=700",
    time: 30,
    likes: 120,
    views: 850,
  },
  {
    id: 2,
    title: "سالاد سزار",
    category: "سالاد",
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=700",
    time: 20,
    likes: 95,
    views: 620,
  },
  {
    id: 3,
    title: "پنکیک خانگی",
    category: "صبحانه",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700",
    time: 25,
    likes: 75,
    views: 430,
  },
  {
    id: 4,
    title: "کیک شکلاتی",
    category: "دسر",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
    time: 50,
    likes: 180,
    views: 1200,
  },
];

function SavedRecipes() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemove = (id: number) => {
    setRecipes((previous) =>
      previous.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <section className="space-y-7">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black text-[#292D26]">
            غذاهای ذخیره‌شده
          </h2>
          <p className="mt-2 text-sm text-[#817F73]">
            دستورهای مورد علاقه‌ات رو اینجا پیدا کن.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-[#526B45]/10 px-4 py-3 text-sm font-bold text-[#526B45]">
          <Bookmark size={19} />
          {recipes.length} غذای ذخیره‌شده
        </div>
      </div>

      {/* Search */}
      <div className="relative rounded-2xl border border-[#E6E0D3] bg-white p-4">
        <Search
          size={19}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-[#817F73]"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="جست‌وجو بین غذاهای ذخیره‌شده..."
          className="w-full rounded-xl border border-[#E6E0D3] py-3 pl-4 pr-11 text-sm outline-none transition focus:border-[#526B45]"
        />
      </div>

      {/* Recipe Cards */}
      {filteredRecipes.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="group overflow-hidden rounded-2xl border border-[#E6E0D3] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#526B45]">
                  {recipe.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-[#292D26]">
                    {recipe.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() => handleRemove(recipe.id)}
                    title="حذف از ذخیره‌شده‌ها"
                    className="rounded-lg p-2 text-red-400 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={19} />
                  </button>
                </div>

                {/* Time */}
                <div className="mt-4 flex items-center gap-2 text-sm text-[#817F73]">
                  <Clock size={16} className="text-[#526B45]" />
                  {recipe.time} دقیقه آماده‌سازی
                </div>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-between border-t border-[#E6E0D3] pt-4">

                  <div className="flex items-center gap-4 text-xs text-[#817F73]">
                    <span className="flex items-center gap-1">
                      <Heart size={15} className="text-red-400" />
                      {recipe.likes}
                    </span>

                    <span className="flex items-center gap-1">
                      <Eye size={15} className="text-[#526B45]" />
                      {recipe.views}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 text-xs font-bold text-[#526B45]">
                    <ChefHat size={15} />
                    Foodora
                  </span>
                </div>

              </div>
            </article>
          ))}

        </div>
      ) : (
        <div className="rounded-3xl border border-[#E6E0D3] bg-white px-5 py-16 text-center">
          <Bookmark
            size={45}
            className="mx-auto mb-4 text-[#526B45]"
          />

          <h3 className="text-lg font-black text-[#292D26]">
            غذایی پیدا نشد!
          </h3>

          <p className="mt-2 text-sm text-[#817F73]">
            هنوز غذایی با این نام ذخیره نکرده‌ای.
          </p>
        </div>
      )}

    </section>
  );
}

export default SavedRecipes;
