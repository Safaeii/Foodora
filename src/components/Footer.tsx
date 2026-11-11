
import { Link } from "react-router-dom";
import { ChefHat, ArrowUpLeft, Utensils } from "lucide-react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer dir="rtl" className="mt-16 bg-[#526B45] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/15 p-3">
                <ChefHat size={27} />
              </div>
              <span className="text-2xl font-black">Foodora</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              طعم تازه‌ای از آشپزی؛
              الهام بگیر، خلق کن و به اشتراک بگذار.
            </p>
          </div>

          <div className="flex flex-wrap gap-7 text-sm font-medium text-white/80">
            <Link to="/" className="transition hover:text-white">
              خانه
            </Link>
            <Link to="/community" className="transition hover:text-white">
              دستورهای غذایی
            </Link>
            <Link to="/dashboard" className="transition hover:text-white">
              حساب کاربری
            </Link>
          </div>

          <Link
            to="/community"
            className="flex items-center gap-3 self-start rounded-2xl bg-[#F7F3E8] px-5 py-4 font-bold text-[#526B45] transition hover:bg-white md:self-auto"
          >
            <Utensils size={19} />
            کشف طعم‌های جدید
            <ArrowUpLeft size={18} />
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-xs text-white/65 sm:flex-row">
          <span>© {currentYear} Foodora</span>
          <span>آشپزی، خلاقیت و طعم زندگی 🍃</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
