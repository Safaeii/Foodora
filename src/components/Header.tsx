
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  { name: "مرغ", path: "/chicken", emoji: "🍗", color: "from-orange-400 to-red-500" },
  { name: "گوشت", path: "/beef", emoji: "🥩", color: "from-red-400 to-rose-600" },
  { name: "سبزیجات", path: "/vegetarian", emoji: "🥦", color: "from-lime-400 to-green-600" },
  { name: "غذاهای دریایی", path: "/seafood", emoji: "🐟", color: "from-sky-400 to-blue-600" },
  { name: "دسر", path: "/desserts", emoji: "🍰", color: "from-pink-400 to-fuchsia-500" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = search.trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearch("");
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-orange-200 bg-gradient-to-l from-amber-200 via-orange-100 to-lime-100 shadow-lg shadow-orange-900/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

        {/* لوگو و نام سایت */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-amber-400 text-2xl text-white shadow-lg shadow-orange-500/40 transition duration-300 group-hover:rotate-12 group-hover:scale-110">
            🍳
          </div>

          <div>
            <h1 className="text-lg font-black text-orange-800 sm:text-xl">
              آشپزخونه
            </h1>
            <p className="mt-0.5 text-[10px] font-bold text-green-700 sm:text-xs">
              دنیای خوشمزه‌ها 🌿
            </p>
          </div>
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            to="/"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            🏠 صفحه اصلی
          </Link>

          {/* دسته‌بندی‌ها */}
          <div
            className="relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <button
              type="button"
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-green-500/25 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              🍽️ دسته‌بندی غذاها
              <span className={`text-xs transition-transform ${showCategories ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {showCategories && (
              <div className="absolute right-0 top-full z-50 w-60 pt-2">
                <div className="rounded-2xl border border-orange-100 bg-white p-2 shadow-2xl shadow-orange-900/15">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => setShowCategories(false)}
                      className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-stone-700 transition last:mb-0 hover:bg-orange-50 hover:text-orange-700"
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-lg shadow-sm`}>
                        {category.emoji}
                      </span>
                      {category.name}
                      <span className="mr-auto text-orange-400">←</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* جست‌وجوی دسکتاپ */}
        <form
          onSubmit={handleSearch}
          className="hidden min-w-0 max-w-xs flex-1 items-center gap-2 rounded-2xl border-2 border-amber-300 bg-white px-3 py-2 shadow-md transition focus-within:border-orange-500 focus-within:shadow-lg focus-within:shadow-orange-300/40 md:flex"
        >
          <span className="text-xl">🔎</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="دنبال چه غذایی هستی؟"
            className="w-full min-w-0 bg-transparent py-1 text-sm text-stone-800 outline-none placeholder:text-stone-400"
          />

          <button
            type="submit"
            className="shrink-0 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 text-xs font-bold text-white transition hover:from-red-600 hover:to-orange-600"
          >
            جست‌وجو
          </button>
        </form>

        {/* دکمه منوی موبایل */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-xl text-white shadow-lg shadow-orange-500/30 transition hover:scale-105 lg:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="border-t border-orange-200 bg-gradient-to-b from-orange-50 to-amber-50 px-4 pb-5 pt-4 shadow-inner lg:hidden">
          <form onSubmit={handleSearch} className="mb-4 flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="اسم غذا رو بنویس..."
              className="min-w-0 flex-1 rounded-xl border-2 border-amber-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-sm font-bold text-white shadow-md"
            >
              جست‌وجو
            </button>
          </form>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="mb-3 flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 font-bold text-white shadow-md"
          >
            🏠 صفحه اصلی
          </Link>

          <p className="mb-3 mt-5 text-sm font-black text-green-800">
            🍽️ دسته‌بندی غذاها
          </p>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 rounded-xl bg-gradient-to-br ${category.color} p-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg`}
              >
                <span className="text-xl">{category.emoji}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
