
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  { name: "مرغ", path: "/chicken", emoji: "🍗" },
  { name: "گوشت", path: "/beef", emoji: "🥩" },
  { name: "سبزیجات", path: "/vegetarian", emoji: "🥦" },
  { name: "غذاهای دریایی", path: "/seafood", emoji: "🐟" },
  { name: "دسر", path: "/desserts", emoji: "🍰" },
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
    <header className="sticky top-0 z-50 border-b border-[#E6E0D3] bg-[#FFFEFC]/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#526B45] text-2xl text-white shadow-lg transition group-hover:rotate-6">
            🍳
          </div>

          <div>
            <h1 className="text-xl font-black text-[#292D26]">
              Foodora
            </h1>
            <p className="text-[10px] font-semibold text-[#E98945]">
              طعم زندگی، با آشپزی
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">

          <Link
            to="/"
            className="rounded-xl px-3 py-2.5 text-sm font-bold text-[#526B45] hover:bg-[#F7F3E8]"
          >
            خانه
          </Link>

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <button
              type="button"
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#292D26] hover:bg-[#F7F3E8]"
            >
              دسته‌بندی‌ها
              <span className="text-xs">⌄</span>
            </button>

            {showCategories && (
              <div className="absolute right-0 top-full z-50 w-60 pt-3">
                <div className="rounded-2xl border border-[#E6E0D3] bg-white p-2 shadow-xl">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => setShowCategories(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#292D26] hover:bg-[#F7F3E8]"
                    >
                      <span className="text-xl">{category.emoji}</span>
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Community */}
          <Link
            to="/community"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[#292D26] transition-colors hover:bg-[#F7F3E8] hover:text-[#E98945]"
          >
            دستورهای کاربران
          </Link>

        </nav>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto hidden h-12 max-w-md flex-1 items-center gap-3 rounded-2xl border border-[#E6E0D3] bg-[#F7F3E8] px-4 transition focus-within:border-[#526B45] focus-within:ring-2 focus-within:ring-[#526B45]/10 md:flex"
        >
          <svg
            className="h-5 w-5 shrink-0 text-[#526B45]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="چی دوست داری بپزی؟ جست‌وجو کن..."
            className="w-full bg-transparent text-sm text-[#292D26] outline-none placeholder:text-[#817F73]"
          />

          <button
            type="submit"
            className="shrink-0 rounded-xl bg-[#526B45] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#405638]"
          >
            جستجو
          </button>
        </form>

        {/* User Login */}
        <Link
          to="/login"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#526B45] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#405638] md:flex"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
          </svg>
          ورود / ثبت‌نام
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
          aria-expanded={isOpen}
          className="mr-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#526B45] text-xl text-white md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#E6E0D3] bg-white px-4 py-5 md:hidden">

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mb-5 flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="دنبال چه غذایی هستی؟"
              className="min-w-0 flex-1 rounded-xl border border-[#E6E0D3] bg-[#F7F3E8] px-3 py-3 text-sm outline-none focus:border-[#526B45]"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#526B45] px-4 text-sm font-bold text-white"
            >
              جست‌وجو
            </button>
          </form>

          {/* Home */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="mb-2 block rounded-xl bg-[#F7F3E8] p-3 font-bold text-[#526B45]"
          >
            🏠 صفحه اصلی
          </Link>

          {/* Community */}
          <Link
            to="/community"
            onClick={() => setIsOpen(false)}
            className="mb-2 block rounded-xl bg-[#F7F3E8] p-3 font-bold text-[#526B45]"
          >
            🍽️ دستورهای کاربران
          </Link>

          {/* Categories */}
          <p className="mb-3 mt-5 text-sm font-black text-[#526B45]">
            دسته‌بندی غذاها
          </p>

          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl bg-[#F7F3E8] p-3 text-sm font-bold text-[#292D26]"
              >
                {category.emoji}
                {category.name}
              </Link>
            ))}
          </div>

          {/* Login */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#526B45] p-4 font-bold text-white"
          >
            ورود / ثبت‌نام
          </Link>

        </div>
      )}
    </header>
  );
}
