import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF7F2]">

      {/* المان‌های تزئینی */}
      <div className="absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-[#F4D9B9]/60 blur-3xl" />
      <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-[#DCE5D2]/60 blur-3xl" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">

        {/* بخش متن */}
        <div className="text-center lg:text-right">

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E9DFD4] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#687653]">
            <span className="text-lg">✳</span>
            دنیایی از طعم‌های تازه
          </span>

          <h1 className="text-5xl font-black leading-[1.6] tracking-tight text-[#352820] sm:text-6xl lg:text-7xl">
            هر روز
            <br />
            یک طعم
            <span className="relative mr-3 inline-block text-[#B85C38]">
              تازه!
              <span className="absolute bottom-2 right-0 -z-10 h-3 w-full rounded-full bg-[#F2D3B8]" />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-9 text-[#84786F] lg:mx-0 lg:text-lg">
            از غذاهای خونگی و اصیل تا طعم‌های جدید دنیا؛
            دستور پخت مورد علاقه‌ات رو پیدا کن و از آشپزی
            لذت ببر.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

            <Link
              to="/chicken"
              className="group flex items-center gap-3 rounded-2xl bg-[#B85C38] px-7 py-4 font-bold text-white shadow-lg shadow-[#B85C38]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#99482B]"
            >
              کشف دستور پخت‌ها
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>

            <Link
              to="/vegetarian"
              className="flex items-center gap-2 rounded-2xl border border-[#D8C9B9] bg-white/70 px-7 py-4 font-semibold text-[#352820] transition hover:border-[#687653] hover:bg-white"
            >
              <span>🍃</span>
              غذاهای گیاهی
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-[#E9DFD4] pt-7 lg:justify-start">

            <div>
              <p className="text-lg font-extrabold text-[#B85C38]">
                متنوع
              </p>
              <p className="mt-1 text-sm text-[#84786F]">
                دستورهای گوناگون
              </p>
            </div>

            <div>
              <p className="text-lg font-extrabold text-[#687653]">
                ساده
              </p>
              <p className="mt-1 text-sm text-[#84786F]">
                برای آشپزی روزانه
              </p>
            </div>

            <div>
              <p className="text-lg font-extrabold text-[#B85C38]">
                جهانی
              </p>
              <p className="mt-1 text-sm text-[#84786F]">
                طعم‌هایی از سراسر دنیا
              </p>
            </div>

          </div>
        </div>

        {/* بخش تصویر */}
        <div className="relative mx-auto w-full max-w-[540px] py-8">

          {/* دایره‌های تزئینی */}
          <div className="absolute inset-4 rounded-full bg-[#E8D7BD] sm:inset-0" />

          <div className="absolute -right-2 top-10 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#687653] text-3xl text-white shadow-lg sm:-right-5 sm:h-20 sm:w-20">
            🍃
          </div>

          <div className="absolute -bottom-1 left-0 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9A15C] text-3xl shadow-lg sm:-left-4 sm:h-20 sm:w-20">
            🍊
          </div>

          {/* تصویر اصلی غذا */}
          <div className="relative mx-auto h-[340px] w-[min(100%,340px)] overflow-hidden rounded-full border-[10px] border-white shadow-2xl sm:h-[430px] sm:w-[430px] sm:border-[14px]">
            <img
              src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
              alt="غذای خوشمزه"
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          {/* کارت کوچک */}
          <div className="absolute bottom-12 right-0 rounded-2xl border border-[#E9DFD4] bg-white px-4 py-3 shadow-xl sm:right-2 sm:px-5 sm:py-4">
            <p className="text-sm font-bold text-[#352820]">
              🍽️ وقتشه خوشمزه بپزی!
            </p>
            <p className="mt-1 text-xs text-[#84786F]">
              غذای بعدیت رو پیدا کن
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}