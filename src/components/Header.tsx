
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "مرغ", path: "/chicken", emoji: "🍗" },
    { name: "گوشت", path: "/beef", emoji: "🥩" },
    { name: "سبزیجات", path: "/vegetarian", emoji: "🥦" },
    { name: "غذاهای دریایی", path: "/seafood", emoji: "🐟" },
    { name: "دسر", path: "/desserts", emoji: "🍰" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9DFD4] bg-[#FFFEFC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold text-[#B85C38] transition hover:opacity-80 sm:text-2xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FAE9DE]">
            🍲
          </span>
          <span>آشپزخونه</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium sm:gap-5 sm:text-base">
          <Link
            to="/"
            className="rounded-xl px-3 py-2 text-[#352820] transition hover:bg-[#FAF7F2] hover:text-[#B85C38]"
          >
            صفحه اصلی
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-[#687653] transition hover:bg-[#F0F1E9] hover:text-[#B85C38]"
            >
              دسته‌بندی‌ها
              <span
                className={`text-xs transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-3 w-52 overflow-hidden rounded-2xl border border-[#E9DFD4] bg-[#FFFEFC] p-2 shadow-xl">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#352820] transition hover:bg-[#FAF7F2] hover:text-[#B85C38]"
                  >
                    <span>{category.emoji}</span>
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 rounded-2xl border border-[#E9DFD4] bg-[#FAF7F2] px-4 py-2.5 transition focus-within:border-[#B85C38] sm:flex">
          <span className="text-lg text-[#84786F]">⌕</span>
          <input
            type="text"
            placeholder="جست‌وجوی غذا..."
            className="w-36 bg-transparent text-sm text-[#352820] outline-none placeholder:text-[#A69A90] lg:w-44"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;