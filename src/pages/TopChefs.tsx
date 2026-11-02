
import {
  Award,
  ChefHat,
  Crown,
  Flame,
  Star,
  Utensils,
} from "lucide-react";

export default function TopChefs() {
  return (
    <section
      id="top-users"
      dir="rtl"
      className="bg-[#F7F3E8] px-5 py-16 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E98945]/10 px-4 py-2 text-sm font-bold text-[#E98945]">
              <Flame size={17} />
              ستاره‌های Foodora
            </span>

            <h2 className="text-3xl font-black text-[#292D26] sm:text-4xl">
              آشپزهای برتر
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#817F73]">
              با خلاق‌ترین آشپزهای جامعه Foodora آشنا شو.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-[#E6E0D3] bg-white px-4 py-3 text-sm font-semibold text-[#526B45]">
            <Award size={20} />
            رتبه‌بندی این هفته
          </div>
        </div>

        {/* Featured Chefs */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* First Chef */}
          <article className="relative overflow-hidden rounded-[2rem] border border-[#E9C778] bg-gradient-to-br from-[#FFF4D7] to-white p-7 shadow-lg shadow-[#E9C778]/10 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[#E9C778]/20 blur-2xl" />

            <div className="relative flex items-center justify-between">
              <span className="rounded-full bg-[#E9C778]/25 px-4 py-2 text-sm font-black text-[#9B7020]">
                رتبه اول
              </span>

              <Crown size={30} className="text-[#D6A52F]" />
            </div>

            <div className="relative my-7 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#E9C778] bg-[#FFF0C5] text-[#A8791C] shadow-md">
                <ChefHat size={46} />
              </div>
            </div>

            <div className="relative text-center">
              <h3 className="text-xl font-black text-[#292D26]">
                سارا محمدی
              </h3>

              <p className="mt-2 text-sm text-[#817F73]">
                عاشق غذاهای سالم و خلاقانه
              </p>

              <div className="my-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/80 p-4">
                  <Utensils className="mx-auto mb-2 text-[#526B45]" size={21} />
                  <strong className="text-lg text-[#292D26]">۳۸</strong>
                  <p className="mt-1 text-xs text-[#817F73]">دستور غذا</p>
                </div>

                <div className="rounded-2xl bg-white/80 p-4">
                  <Star className="mx-auto mb-2 fill-[#E9B94B] text-[#E9B94B]" size={21} />
                  <strong className="text-lg text-[#292D26]">۴.۹</strong>
                  <p className="mt-1 text-xs text-[#817F73]">امتیاز</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-full bg-[#E9C778]/20 py-3 text-sm font-bold text-[#96701F]">
                <Crown size={17} />
                آشپز برتر هفته
              </div>
            </div>
          </article>

          {/* Second Chef */}
          <article className="relative overflow-hidden rounded-[2rem] border border-[#D8D8D8] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#E8E8E8] px-4 py-2 text-sm font-black text-[#686868]">
                رتبه دوم
              </span>
              <Award size={28} className="text-[#929292]" />
            </div>

            <div className="my-7 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#D8D8D8] bg-[#F2F2F2] text-[#777777]">
                <ChefHat size={46} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-black text-[#292D26]">
                علی رضایی
              </h3>

              <p className="mt-2 text-sm text-[#817F73]">
                متخصص غذاهای بین‌المللی
              </p>

              <div className="my-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F7F3E8] p-4">
                  <Utensils className="mx-auto mb-2 text-[#526B45]" size={21} />
                  <strong className="text-lg text-[#292D26]">۲۹</strong>
                  <p className="mt-1 text-xs text-[#817F73]">دستور غذا</p>
                </div>

                <div className="rounded-2xl bg-[#F7F3E8] p-4">
                  <Star className="mx-auto mb-2 fill-[#E9B94B] text-[#E9B94B]" size={21} />
                  <strong className="text-lg text-[#292D26]">۴.۸</strong>
                  <p className="mt-1 text-xs text-[#817F73]">امتیاز</p>
                </div>
              </div>

              <div className="rounded-full bg-[#F1F1F1] py-3 text-sm font-bold text-[#777777]">
                آشپز خلاق
              </div>
            </div>
          </article>

          {/* Third Chef */}
          <article className="relative overflow-hidden rounded-[2rem] border border-[#DDAF91] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#E9C3A9]/30 px-4 py-2 text-sm font-black text-[#A66B45]">
                رتبه سوم
              </span>
              <Award size={28} className="text-[#B77B55]" />
            </div>

            <div className="my-7 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#DDAF91] bg-[#FCEBDD] text-[#A66B45]">
                <ChefHat size={46} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-black text-[#292D26]">
                نگار احمدی
              </h3>

              <p className="mt-2 text-sm text-[#817F73]">
                خلاق در دنیای شیرینی و دسر
              </p>

              <div className="my-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F7F3E8] p-4">
                  <Utensils className="mx-auto mb-2 text-[#526B45]" size={21} />
                  <strong className="text-lg text-[#292D26]">۲۴</strong>
                  <p className="mt-1 text-xs text-[#817F73]">دستور غذا</p>
                </div>

                <div className="rounded-2xl bg-[#F7F3E8] p-4">
                  <Star className="mx-auto mb-2 fill-[#E9B94B] text-[#E9B94B]" size={21} />
                  <strong className="text-lg text-[#292D26]">۴.۷</strong>
                  <p className="mt-1 text-xs text-[#817F73]">امتیاز</p>
                </div>
              </div>

              <div className="rounded-full bg-[#FCEBDD] py-3 text-sm font-bold text-[#A66B45]">
                آشپز خوش‌ذوق
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
