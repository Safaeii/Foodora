
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  ChefHat,
  Clock3,
  Flame,
  Gift,
  Lightbulb,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";

const participants = [
  {
    name: "سارا محمدی",
    recipe: "سالاد رنگارنگ مدیترانه‌ای",
    category: "غذای سالم",
    votes: 128,
    initial: "س",
  },
  {
    name: "علی رضایی",
    recipe: "پاستا با سس مخصوص",
    category: "غذای اصلی",
    votes: 96,
    initial: "ع",
  },
  {
    name: "نگار احمدی",
    recipe: "رول سبزیجات و پنیر",
    category: "پیش‌غذا",
    votes: 84,
    initial: "ن",
  },
];

export default function WeeklyChallenge() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F7F3E8] py-12">
      <div className="mx-auto max-w-7xl px-5">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-[#817F73]">
          <Link to="/" className="transition hover:text-[#526B45]">
            خانه
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#526B45]">
            چالش هفتگی
          </span>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#526B45] px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 right-1/3 h-72 w-72 rounded-full bg-[#E98945]/30 blur-3xl" />

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                <Flame size={17} className="text-[#FFC078]" />
                چالش جدید Foodora
              </div>

              <h1 className="mb-5 text-3xl font-black leading-relaxed md:text-5xl">
                این هفته،
                <br />
                آشپز خلاق تو باش!
              </h1>

              <p className="mb-8 max-w-lg text-sm leading-8 text-white/75 md:text-base">
                با خلاقیت خودت یک غذای خوشمزه و متفاوت بساز،
                دستورت رو به اشتراک بذار و در رقابت آشپزهای Foodora شرکت کن.
              </p>

              <a
                href="#participants"
                className="inline-flex items-center gap-2 rounded-full bg-[#E98945] px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d97935]"
              >
                مشاهده شرکت‌کنندگان
                <ArrowLeft size={18} />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-7 text-center shadow-2xl backdrop-blur-md">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#E98945]">
                  <ChefHat size={48} />
                </div>
                <span className="text-sm text-white/70">
                  موضوع چالش این هفته
                </span>
                <h2 className="mt-3 text-2xl font-black">
                  غذای سالم و خلاقانه
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  با مواد اولیه ساده، یک غذای جذاب و متفاوت خلق کن.
                </p>

                <div className="mt-7 flex items-center justify-center gap-3 border-t border-white/15 pt-6">
                  <div>
                    <Users className="mx-auto mb-2" size={22} />
                    <span className="text-sm">آشپزهای خلاق</span>
                  </div>
                  <div className="h-10 w-px bg-white/20" />
                  <div>
                    <Trophy className="mx-auto mb-2" size={22} />
                    <span className="text-sm">رقابت هفتگی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Info */}
        <section className="my-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CalendarDays,
              title: "زمان برگزاری",
              value: "هر هفته",
            },
            {
              icon: Utensils,
              title: "موضوع این هفته",
              value: "غذای سالم",
            },
            {
              icon: Users,
              title: "شرکت در چالش",
              value: "برای همه",
            },
            {
              icon: Trophy,
              title: "انتخاب برنده",
              value: "با رأی کاربران",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E6E0D3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#526B45]/10 text-[#526B45]">
                <item.icon size={24} />
              </div>
              <p className="mb-2 text-sm text-[#817F73]">{item.title}</p>
              <h3 className="font-bold text-[#292D26]">{item.value}</h3>
            </div>
          ))}
        </section>

        {/* Rules */}
        <section className="mb-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E6E0D3] bg-white p-7 md:p-9">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-[#E98945]/15 p-3 text-[#E98945]">
                <Lightbulb size={25} />
              </div>
              <h2 className="text-2xl font-black text-[#292D26]">
                چطور شرکت کنی؟
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "یک غذای سالم و خلاقانه آماده کن.",
                "از غذای خودت عکس بگیر.",
                "مواد اولیه و مراحل پخت را بنویس.",
                "دستور خودت را در جامعه Foodora منتشر کن.",
              ].map((rule, index) => (
                <div key={rule} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#526B45]/10 font-bold text-[#526B45]">
                    {index + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-7 text-[#55594F]">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/community"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#526B45] px-6 py-3 font-bold text-white transition hover:bg-[#405738]"
            >
              رفتن به جامعه آشپزها
              <ArrowLeft size={17} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#292D26] p-7 text-white md:p-9">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#E98945]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E98945]">
                <Gift size={28} />
              </div>

              <h2 className="mb-4 text-2xl font-black">
                جایزه این هفته
              </h2>

              <p className="mb-8 text-sm leading-8 text-white/65">
                خلاقیتت رو به نمایش بذار و با شرکت در چالش، فرصت دیده شدن
                در جامعه آشپزهای Foodora رو به دست بیار.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Trophy className="text-[#FFC078]" size={30} />
                  <div>
                    <h3 className="font-bold">آشپز برتر هفته</h3>
                    <p className="mt-1 text-xs text-white/50">
                      معرفی در بخش برترین آشپزها
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Participants */}
        <section id="participants" className="scroll-mt-24">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-[#E98945]">
                رقابت آشپزها
              </span>
              <h2 className="mt-2 text-2xl font-black text-[#292D26] md:text-3xl">
                دستورهای شرکت‌کنندگان
              </h2>
              <p className="mt-2 text-sm text-[#817F73]">
                نمونه‌ای از دستورهای شرکت‌کنندگان در چالش
              </p>
            </div>

            <Clock3 size={25} className="text-[#526B45]" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {participants.map((person, index) => (
              <article
                key={person.name}
                className="rounded-2xl border border-[#E6E0D3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#526B45]/10 px-3 py-1.5 text-xs font-bold text-[#526B45]">
                    {person.category}
                  </span>
                  {index === 0 && (
                    <Trophy size={22} className="text-[#E98945]" />
                  )}
                </div>

                <div className="mb-5 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-[#E98945]/20 to-[#526B45]/20">
                  <Utensils size={38} className="text-[#526B45]" />
                </div>

                <h3 className="mb-4 font-black text-[#292D26]">
                  {person.recipe}
                </h3>

                <div className="flex items-center justify-between border-t border-[#E6E0D3] pt-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#526B45]/10 text-sm font-bold text-[#526B45]">
                      {person.initial}
                    </span>
                    <span className="text-sm text-[#817F73]">
                      {person.name}
                    </span>
                  </div>

                  <span className="text-sm font-bold text-[#E98945]">
                    {person.votes} رأی
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
