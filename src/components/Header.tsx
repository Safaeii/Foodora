
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChefHat,
  Search,
  UserRound,
  Menu,
  X,
  ChevronDown,
  Drumstick,
  Beef,
  Salad,
  Fish,
  CakeSlice,

} from "lucide-react";

const categories = [
  { name: "مرغ", path: "/chicken", icon: Drumstick },
  { name: "گوشت", path: "/beef", icon: Beef },
  { name: "سبزیجات", path: "/vegetarian", icon: Salad },
  { name: "غذاهای دریایی", path: "/seafood", icon: Fish },
  { name: "دسر", path: "/desserts", icon: CakeSlice },
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
    <header dir="rtl" className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/80 bg-[#FFFEFC]/90 px-5 py-3 shadow-[0_12px_35px_rgba(62,66,43,0.10)] backdrop-blur-2xl lg:px-6">

        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#526B45] text-white shadow-md transition duration-300 group-hover:rotate-6">
            <ChefHat size={26} strokeWidth={1.8} />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-[#292D26]">
              Foodora
            </h1>
            <p className="mt-0.5 text-[10px] font-medium text-[#817F73]">
              طعم زندگی، با آشپزی
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">

          <Link
            to="/"
            className="whitespace-nowrap rounded-full bg-[#526B45]/10 px-4 py-3 text-sm font-bold text-[#526B45] transition hover:bg-[#526B45] hover:text-white"
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
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold transition ${
                showCategories
                  ? "bg-[#526B45] text-white"
                  : "text-[#292D26] hover:bg-[#526B45]/10"
              }`}
            >
              دسته‌بندی‌ها

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showCategories ? "rotate-180" : ""
                }`}
              />
            </button>

            {showCategories && (
              <div className="absolute right-0 top-full z-50 w-60 pt-3">
                <div className="rounded-3xl border border-[#E6E0D3] bg-[#FFFEFC] p-3 shadow-xl">
                  {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                      <Link
                        key={category.path}
                        to={category.path}
                        onClick={() => setShowCategories(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#292D26] transition hover:bg-[#F7F3E8] hover:text-[#526B45]"
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="text-[#526B45]"
                        />

                        {category.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
           href="/#community"
            className="whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold text-[#292D26] transition hover:bg-[#526B45]/10 hover:text-[#526B45]"
          >
        تجربه آشپزها   
          </a>
        </nav>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden h-11 max-w-[230px] flex-1 items-center gap-3 rounded-full border border-[#E6E0D3] bg-white/60 px-4 transition focus-within:border-[#526B45] xl:flex"
        >
          <Search size={19} className="shrink-0 text-[#526B45]" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="چی دوست داری بپزی؟"
            className="w-full min-w-0 bg-transparent text-sm text-[#292D26] outline-none placeholder:text-[#817F73]"
          />
        </form>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
        

          <Link
            to="/login"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#171713] px-5 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#526B45]"
          >
            <UserRound size={18} />
            ورود / ثبت‌نام
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
          aria-expanded={isOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#526B45] text-white transition hover:bg-[#405638] lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[#E6E0D3] bg-[#FFFEFC] p-5 shadow-xl backdrop-blur-xl lg:hidden">

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="mb-5 flex items-center gap-2 rounded-2xl border border-[#E6E0D3] bg-[#F7F3E8] p-2"
          >
            <Search size={19} className="mr-2 shrink-0 text-[#526B45]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="دنبال چه غذایی هستی؟"
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#526B45] px-4 py-2.5 text-sm font-bold text-white"
            >
              جستجو
            </button>
          </form>

          {/* Main Links */}
          <div className="space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-[#F7F3E8] p-3 font-bold text-[#526B45]"
            >
              <ChefHat size={19} />
              صفحه اصلی
            </Link>

            <Link
              to="/community"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-2xl p-3 font-semibold text-[#292D26] transition hover:bg-[#F7F3E8]"
            >
              <Salad size={19} />
              دستورهای کاربران
            </Link>
          </div>

          <div className="my-5 border-t border-[#E6E0D3]" />

          {/* Mobile Categories */}
          <p className="mb-3 text-sm font-black text-[#526B45]">
            دسته‌بندی غذاها
          </p>

          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-2xl bg-[#F7F3E8] p-3 text-sm font-semibold text-[#292D26] transition hover:bg-[#526B45]/10"
                >
                  <Icon size={19} className="text-[#526B45]" />
                  {category.name}
                </Link>
              );
            })}
          </div>

          {/* Login */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#171713] p-4 font-bold text-white transition hover:bg-[#526B45]"
          >
            <UserRound size={19} />
            ورود / ثبت‌نام
          </Link>
        </div>
      )}
    </header>
  );
}
