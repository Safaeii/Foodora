
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ChefHat, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#F7F3E8] py-16 sm:py-24"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .7; transform: scale(1.15); }
        }

        .hero-float { animation: float 6s ease-in-out infinite; }
        .hero-float-reverse { animation: floatReverse 5s ease-in-out infinite; }
        .hero-spin { animation: spinSlow 25s linear infinite; }
        .hero-fade { animation: fadeUp .9s ease-out both; }
        .hero-glow { animation: glow 5s ease-in-out infinite; }
      `}</style>

      {/* Animated Background */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#DCE5D2] blur-[100px] hero-glow" />
      <div className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-[#F2D3B8] blur-[100px] hero-glow" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">

        {/* Text */}
        <div className="hero-fade text-center lg:text-right">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE3D4] bg-white/80 px-5 py-2.5 text-sm font-bold text-[#526B45] shadow-sm">
            <Sparkles size={17} className="text-[#E98945]" />
            دنیایی از طعم‌های هیجان‌انگیز
          </div>

          <h1 className="text-5xl font-black leading-[1.5] text-[#292D26] sm:text-6xl lg:text-7xl">
            آشپزی کن،
            <br />
            <span className="text-[#526B45]">طعم زندگی</span>
            <br />
            <span className="text-[#E98945]">رو کشف کن!</span>
          </h1>

          <p className="mx-auto mt-7 max-w-lg text-base leading-9 text-[#817F73] lg:mx-0">
            از دستورهای ساده و خانگی تا غذاهای خاص و متفاوت؛
            اینجا هر روز می‌تونی یک طعم تازه کشف کنی.
            ایده بگیر، آشپزی کن و تجربه‌هات رو به اشتراک بذار.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

            <Link
              to="/community"
              className="group flex items-center gap-3 rounded-2xl bg-[#526B45] px-7 py-4 font-bold text-white shadow-lg shadow-[#526B45]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#405638]"
            >
              کشف دستورها
              <ArrowLeft size={19} className="transition-transform group-hover:-translate-x-1" />
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-2xl border border-[#D8DDCE] bg-white px-6 py-4 font-bold text-[#526B45] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ChefHat size={19} />
              اشتراک دستور غذا
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-[#E6E0D3] pt-7 lg:justify-start">
            <div>
              <p className="text-xl font-black text-[#526B45]">متنوع</p>
              <p className="mt-1 text-xs text-[#817F73]">دستورهای گوناگون</p>
            </div>
            <div>
              <p className="text-xl font-black text-[#E98945]">خلاقانه</p>
              <p className="mt-1 text-xs text-[#817F73]">ایده‌های تازه</p>
            </div>
            <div>
              <p className="text-xl font-black text-[#526B45]">خوشمزه</p>
              <p className="mt-1 text-xs text-[#817F73]">برای همه سلیقه‌ها</p>
            </div>
          </div>
        </div>

        {/* Animated Food Visual */}
        <div className="relative mx-auto flex h-[430px] w-full max-w-[540px] items-center justify-center sm:h-[550px]">

          {/* Rotating Ring */}
          <div className="hero-spin absolute h-[340px] w-[340px] rounded-full border border-dashed border-[#526B45]/30 sm:h-[450px] sm:w-[450px]" />

          {/* Decorative Circles */}
          <div className="hero-float-reverse absolute right-5 top-10 h-20 w-20 rounded-full bg-[#E98945]/20 blur-sm" />
          <div className="hero-float absolute bottom-10 left-5 h-24 w-24 rounded-full bg-[#526B45]/15 blur-sm" />

          {/* Main Food Image */}
          <div className="hero-float relative z-10 h-[300px] w-[300px] overflow-hidden rounded-full border-[10px] border-white shadow-2xl shadow-[#526B45]/20 sm:h-[410px] sm:w-[410px] sm:border-[14px]">
            <img
              src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
              alt="غذای خوشمزه"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card - Time */}
          <div className="hero-float-reverse absolute right-0 top-16 z-20 flex items-center gap-3 rounded-2xl border border-[#E6E0D3] bg-white p-4 shadow-xl sm:-right-5">
            <div className="rounded-xl bg-[#E9EEDC] p-3 text-[#526B45]">
              <Clock size={23} />
            </div>
            <div>
              <p className="text-xs text-[#817F73]">زمان آماده‌سازی</p>
              <p className="mt-1 text-sm font-black text-[#292D26]">۳۰ دقیقه</p>
            </div>
          </div>

          {/* Floating Card - Chef */}
          <div className="hero-float absolute bottom-14 left-0 z-20 flex items-center gap-3 rounded-2xl border border-[#E6E0D3] bg-white p-4 shadow-xl sm:-left-5">
            <div className="rounded-xl bg-[#F8E9D8] p-3 text-[#E98945]">
              <ChefHat size={23} />
            </div>
            <div>
              <p className="text-xs text-[#817F73]">آشپزی با عشق</p>
              <p className="mt-1 text-sm font-black text-[#292D26]">طعم تازه زندگی</p>
            </div>
          </div>

          {/* Floating Food Elements */}
          <div className="hero-float absolute left-12 top-5 z-20 text-4xl">
            🍊
          </div>

          <div className="hero-float-reverse absolute bottom-8 right-12 z-20 text-4xl">
            🥑
          </div>

          <div className="hero-spin absolute right-12 bottom-24 z-0 h-12 w-12 rounded-full border-4 border-[#E98945]/40" />

        </div>
      </div>
    </section>
  );
}
