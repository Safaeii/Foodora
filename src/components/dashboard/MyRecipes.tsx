
import { useState } from "react";
import {
  Search,
  Heart,
  Eye,
  Clock,
  Trash2,
  ChefHat,
  Plus,
  Utensils,
} from "lucide-react";

interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  time: number;
  likes: number;
  views: number;
  status: "published" | "draft";
}

const initialRecipes: Recipe[] = [
  {
    id: 1,
    title: "پاستا آلفردو",
    category: "غذای اصلی",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=700",
    time: 30,
    likes: 45,
    views: 320,
    status: "published",
  },
  {
    id: 2,
    title: "سالاد سزار",
    category: "سالاد",
    image:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=700",
    time: 20,
    likes: 32,
    views: 210,
    status: "published",
  },
  {
    id: 3,
    title: "پنکیک خانگی",
    category: "صبحانه",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700",
    time: 25,
    likes: 18,
    views: 95,
    status: "draft",
  },
  {
    id: 4,
    title: "کیک شکلاتی",
    category: "دسر",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
    time: 50,
    likes: 67,
    views: 480,
    status: "published",
  },
];

type FilterType = "all" | "published" | "draft";

function MyRecipes() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" || recipe.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: number) => {
    setRecipes((previous) =>
      previous.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <section className="space-y-7">

      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black text-[#292D26]">
            دستورهای من
          </h2>

          <p className="mt-2 text-sm text-[#817F73]">
            تمام دستورهای غذایی که در Foodora ثبت کرده‌ای.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-[#526B45]/10 px-4 py-3 text-sm font-bold text-[#526B45]">
          <ChefHat size={19} />
          {recipes.length} دستور
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-[#E6E0D3] bg-white p-5">
          <p className="text-sm text-[#817F73]">
            کل دستورها
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#292D26]">
            {recipes.length}
          </h3>
        </div>

        <div className="rounded-2xl border border-[#E6E0D3] bg-white p-5">
          <p className="text-sm text-[#817F73]">
            منتشرشده
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#526B45]">
            {recipes.filter((item) => item.status === "published").length}
          </h3>
        </div>

        <div className="rounded-2xl border border-[#E6E0D3] bg-white p-5">
          <p className="text-sm text-[#817F73]">
            پیش‌نویس
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#E98945]">
            {recipes.filter((item) => item.status === "draft").length}
          </h3>
        </div>

      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E6E0D3] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="relative flex-1">
          <Search
            size={19}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#817F73]"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جست‌وجوی دستور غذا..."
            className="w-full rounded-xl border border-[#E6E0D3] py-3 pl-4 pr-11 text-sm outline-none transition focus:border-[#526B45]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "همه" },
            { id: "published", label: "منتشرشده" },
            { id: "draft", label: "پیش‌نویس" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as FilterType)}
              className={`rounded-xl px-4 py-3 text-xs font-bold transition ${
                activeFilter === filter.id
                  ? "bg-[#526B45] text-white"
                  : "bg-[#F7F3E8] text-[#817F73] hover:bg-[#EAE5D8]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

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

                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-bold ${
                    recipe.status === "published"
                      ? "bg-[#526B45] text-white"
                      : "bg-[#E98945] text-white"
                  }`}
                >
                  {recipe.status === "published"
                    ? "منتشرشده"
                    : "پیش‌نویس"}
                </span>

              </div>

              {/* Content */}
              <div className="p-5">

                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-lg bg-[#F7F3E8] px-3 py-1.5 text-xs font-bold text-[#526B45]">
                    {recipe.category}
                  </span>

                  <button
                    onClick={() => handleDelete(recipe.id)}
                    title="حذف دستور"
                    className="rounded-lg p-2 text-[#817F73] transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <h3 className="text-lg font-black text-[#292D26]">
                  {recipe.title}
                </h3>

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
                    <Utensils size={15} />
                    Foodora
                  </span>

                </div>
              </div>
            </article>
          ))}

        </div>
      ) : (
        <div className="rounded-3xl border border-[#E6E0D3] bg-white px-5 py-16 text-center">
          <ChefHat size={45} className="mx-auto mb-4 text-[#526B45]" />

          <h3 className="text-lg font-black text-[#292D26]">
            دستوری پیدا نشد!
          </h3>

          <p className="mt-2 text-sm text-[#817F73]">
            عبارت جست‌وجو یا فیلتر انتخابی رو تغییر بده.
          </p>
        </div>
      )}

    </section>
  );
}

export default MyRecipes;
