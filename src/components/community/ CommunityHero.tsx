
import { Link } from "react-router-dom";
import {
  Plus,
  Trophy,
  Heart,
  Bookmark,
  Flame,
  ChefHat,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

function CommunityHero() {
  return (
    <section className="bg-[#F7F3E8] px-5 pb-14 pt-10 sm:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#526B45] p-8 text-white md:p-14">
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white">
              <Sparkles size={16} />
              جامعه آشپزهای Foodora
            </span>

            <h1 className="mb-5 text-3xl font-black leading-relaxed sm:text-5xl">
              آشپزی کن،
              <br />
              تجربه‌ات رو به اشتراک بذار!
            </h1>

            <p className="mb-8 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
              دستورهای خوشمزه‌ات رو با دیگران به اشتراک بذار،
              از تجربه آشپزهای دیگه یاد بگیر و بخشی از
              دنیای خوشمزه Foodora باش.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-3 rounded-xl bg-[#E98945] px-6 py-3.5 font-bold text-white transition hover:bg-[#d97835]"
            >
              شروع آشپزی
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="pointer-events-none absolute -bottom-20 -right-10 text-white/10">
            <ChefHat size={320} strokeWidth={1} />
          </div>

          <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
        </div>

        {/* Main Actions */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <Link
            to="/register"
            className="group flex items-center justify-between rounded-3xl border border-[#E6E0D3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E98945]/15 text-[#E98945]">
                <Plus size={28} />
              </div>

              <h2 className="text-xl font-black text-[#292D26]">
                ثبت دستور جدید
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#817F73]">
                دستور غذای اختصاصی خودت رو با دیگران به اشتراک بذار.
              </p>
            </div>

            <ArrowLeft
              className="text-[#526B45] transition group-hover:-translate-x-2"
              size={24}
            />
          </Link>

          <a
            href="#top-users"
            className="group flex items-center justify-between rounded-3xl border border-[#E6E0D3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#526B45]/10 text-[#526B45]">
                <Trophy size={28} />
              </div>

              <h2 className="text-xl font-black text-[#292D26]">
                آشپزهای برتر
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#817F73]">
                با خلاق‌ترین و فعال‌ترین اعضای Foodora آشنا شو.
              </p>
            </div>

            <ArrowLeft
              className="text-[#526B45] transition group-hover:-translate-x-2"
              size={24}
            />
          </a>
        </div>

        {/* Quick Access */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <a
            href="#recipes"
            className="flex items-center gap-4 rounded-2xl border border-[#E6E0D3] bg-white p-5 transition hover:border-[#E98945]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Heart size={23} />
            </div>

            <div>
              <h3 className="font-bold text-[#292D26]">
                دستورهای محبوب
              </h3>
              <p className="mt-1 text-xs text-[#817F73]">
                پرطرفدارترین غذاها
              </p>
            </div>
          </a>

          <a
            href="#saved-recipes"
            className="flex items-center gap-4 rounded-2xl border border-[#E6E0D3] bg-white p-5 transition hover:border-[#E98945]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Bookmark size={23} />
            </div>

            <div>
              <h3 className="font-bold text-[#292D26]">
                دستورهای ذخیره‌شده
              </h3>
              <p className="mt-1 text-xs text-[#817F73]">
                غذاهای مورد علاقه‌ات
              </p>
            </div>
          </a>

          <a
            href="#weekly-challenge"
            className="flex items-center gap-4 rounded-2xl border border-[#E6E0D3] bg-white p-5 transition hover:border-[#E98945]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#E98945]">
              <Flame size={23} />
            </div>

            <div>
              <h3 className="font-bold text-[#292D26]">
                چالش هفتگی
              </h3>
              <p className="mt-1 text-xs text-[#817F73]">
                چالش جدید آشپزی
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default CommunityHero;
