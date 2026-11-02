
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Plus,
  Trophy,
  Flame,
  ChefHat,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    badge: "جامعه آشپزهای Foodora",
    title: "آشپزی کن، تجربه‌ات رو به اشتراک بذار!",
    description:
      "دستورهای خوشمزه‌ات رو با دیگران به اشتراک بذار و بخشی از دنیای خوشمزه Foodora باش.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    button: "شروع آشپزی",
  },
  {
    badge: "دستورهای اختصاصی",
    title: "هنر آشپزی خودت رو نشون بده!",
    description:
      "غذاهای مورد علاقه‌ات رو معرفی کن و دستورهای خاص خودت رو با دیگران به اشتراک بذار.",
    image: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    button: "ثبت دستور جدید",
  },
  {
    badge: "آشپزهای خلاق",
    title: "با طعم‌های تازه خلاقیت بساز!",
    description:
      "با ایده‌های جدید آشپزی آشنا شو و از تجربه‌های خوشمزه اعضای Foodora الهام بگیر.",
    image: "https://www.themealdb.com/images/media/meals/1549542877.jpg",
    button: "عضویت در جامعه",
  },
  {
    badge: "دنیای غذاهای خوشمزه",
    title: "هر روز یک غذای تازه کشف کن!",
    description:
      "از غذاهای سنتی تا دستورهای مدرن، دنیایی از طعم‌های متفاوت منتظرته.",
    image: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    button: "مشاهده دستورها",
  },
  {
    badge: "طعم سلامتی",
    title: "سالم بخور، خوشمزه زندگی کن!",
    description:
      "با دستورهای متنوع و مواد غذایی تازه، تجربه‌ای متفاوت از آشپزی سالم داشته باش.",
    image: "https://www.themealdb.com/images/media/meals/1550081508.jpg",
    button: "کشف طعم‌های جدید",
  },
];

function CommunityHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  return (
    <section className="bg-[#F7F3E8] px-5 pb-14 pt-10 sm:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Slider */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#354B32] shadow-xl">

          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={currentSlide.image}
              alt="غذای خوشمزه"
              className="h-full w-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#263B29]/95 via-[#354B32]/85 to-[#354B32]/20" />
          </div>

          {/* Decorative background */}
          <div className="pointer-events-none absolute -bottom-20 -right-10 text-white/10">
            <ChefHat size={300} strokeWidth={1} />
          </div>

          <div className="relative z-10 grid min-h-[390px] items-center gap-8 p-7 sm:p-12 md:grid-cols-2 md:p-16">

            {/* Text */}
            <div className="order-1 text-right text-white md:order-2">

              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                <Sparkles size={16} />
                {currentSlide.badge}
              </span>

              <h1 className="mb-6 text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                {currentSlide.title}
              </h1>

              <p className="mb-8 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
                {currentSlide.description}
              </p>

              <Link
                to="/register"
                className="inline-flex items-center gap-3 rounded-xl bg-[#E98945] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d97835]"
              >
                {currentSlide.button}
                <ArrowLeft size={19} />
              </Link>
            </div>

            {/* Food image decoration */}
            <div className="order-2 flex items-center justify-center md:order-1">
              <div className="relative h-64 w-full max-w-[390px] overflow-hidden rounded-[40px] border-4 border-white/20 shadow-2xl sm:h-80">
                <img
                  src={currentSlide.image}
                  alt="Foodora recipe"
                  className="h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Previous button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="اسلاید قبلی"
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#526B45] shadow-lg transition hover:bg-[#E98945] hover:text-white"
          >
            <ArrowLeft size={21} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="اسلاید بعدی"
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#526B45] shadow-lg transition hover:bg-[#E98945] hover:text-white"
          >
            <ArrowRight size={21} />
          </button>

          {/* Slider dots */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.badge}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`رفتن به اسلاید ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-[#E98945]"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
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

        {/* Weekly Challenge */}
        <div className="mt-8">
          <a
            href="#weekly-challenge"
            className="flex items-center gap-5 rounded-3xl border border-[#E6E0D3] bg-white p-6 transition hover:border-[#E98945] hover:shadow-md"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#E98945]">
              <Flame size={27} />
            </div>

            <div>
              <h3 className="font-black text-[#292D26]">
                چالش هفتگی
              </h3>
              <p className="mt-1 text-sm text-[#817F73]">
                در چالش جدید آشپزی شرکت کن.
              </p>
            </div>

            <ArrowLeft className="mr-auto text-[#526B45]" size={22} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default CommunityHero;
