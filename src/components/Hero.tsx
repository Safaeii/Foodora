
import { Link } from "react-router-dom";

export default function Hero() {
  const foodCategories = [
    {
      icon: "🏡",
      title: "غذاهای خانگی",
      description: "طعم غذاهای خونگی و دلچسب",
      color: "bg-[#E9EEDC]",
    },
    {
      icon: "🍲",
      title: "غذاهای سنتی",
      description: "دستورهای اصیل ایرانی",
      color: "bg-[#F6E5D5]",
    },
    {
      icon: "🥗",
      title: "غذاهای سریع",
      description: "خوشمزه، ساده و کم‌دردسر",
      color: "bg-[#E5EBDD]",
    },
    {
      icon: "🎉",
      title: "غذای مهمانی",
      description: "برای دورهمی‌های به‌یادماندنی",
      color: "bg-[#F8E9D8]",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#F7F3E8]">

      {/* Background Decorations */}
      <div className="absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-[#E9DCC3]/60 blur-3xl" />
      <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-[#DCE5D2]/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Main Hero */}
        <div className="grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-2">

          {/* Text Content */}
          <div className="text-center lg:text-right">

            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6E0D3] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#526B45]">
              <span className="text-lg">✳</span>
              دنیایی از طعم‌های تازه
            </span>

            <h1 className="text-5xl font-black leading-[1.6] tracking-tight text-[#292D26] sm:text-6xl lg:text-7xl">
              هر روز
              <br />
              یک طعم
              <span className="relative mr-3 inline-block text-[#E98945]">
                تازه!
                <span className="absolute bottom-2 right-0 -z-10 h-3 w-full rounded-full bg-[#F2D3B8]" />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-9 text-[#817F73] lg:mx-0 lg:text-lg">
              از عطر غذاهای خانگی و اصیل ایرانی تا طعم‌های
              جدید و هیجان‌انگیز دنیا؛ اینجا می‌تونی دستور
              پخت غذاهای مورد علاقه‌ات رو پیدا کنی،
              تجربه‌هات رو به اشتراک بذاری و از آشپزی لذت ببری.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

              <Link
                to="/chicken"
                className="group flex items-center gap-3 rounded-2xl bg-[#526B45] px-7 py-4 font-bold text-white shadow-lg shadow-[#526B45]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#405638]"
              >
                کشف دستور پخت‌ها
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </Link>

              <Link
                to="/vegetarian"
                className="flex items-center gap-2 rounded-2xl border border-[#D8DDCE] bg-white/80 px-7 py-4 font-semibold text-[#292D26] transition hover:border-[#526B45] hover:bg-white"
              >
                <span>🍃</span>
                غذاهای گیاهی
              </Link>

            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-[#E6E0D3] pt-7 lg:justify-start">

              <div>
                <p className="text-lg font-extrabold text-[#526B45]">
                  خانگی
                </p>
                <p className="mt-1 text-sm text-[#817F73]">
                  طعم واقعی خانه
                </p>
              </div>

              <div>
                <p className="text-lg font-extrabold text-[#E98945]">
                  متنوع
                </p>
                <p className="mt-1 text-sm text-[#817F73]">
                  از سراسر دنیا
                </p>
              </div>

              <div>
                <p className="text-lg font-extrabold text-[#526B45]">
                  خلاقانه
                </p>
                <p className="mt-1 text-sm text-[#817F73]">
                  تجربه آشپزی جدید
                </p>
              </div>

            </div>
          </div>

          {/* Food Image */}
          <div className="relative mx-auto w-full max-w-[540px] py-8">

            <div className="absolute inset-4 rounded-full bg-[#E8D7BD] sm:inset-0" />

            <div className="absolute -right-2 top-10 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#526B45] text-3xl text-white shadow-lg sm:-right-5 sm:h-20 sm:w-20">
              🍃
            </div>

            <div className="absolute -bottom-1 left-0 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#E98945] text-3xl shadow-lg sm:-left-4 sm:h-20 sm:w-20">
              🍊
            </div>

            <div className="relative mx-auto h-[340px] w-[min(100%,340px)] overflow-hidden rounded-full border-[10px] border-white shadow-2xl sm:h-[430px] sm:w-[430px] sm:border-[14px]">
              <img
                src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
                alt="غذای خوشمزه و خانگی"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-12 right-0 rounded-2xl border border-[#E6E0D3] bg-white px-4 py-3 shadow-xl sm:right-2 sm:px-5 sm:py-4">
              <p className="text-sm font-bold text-[#292D26]">
                🍽️ وقتشه خوشمزه بپزی!
              </p>
              <p className="mt-1 text-xs text-[#817F73]">
                غذای بعدیت رو پیدا کن
              </p>
            </div>

          </div>
        </div>

        {/* Food Categories */}
        <div className="pb-20 pt-8">

          <div className="mb-8 text-center lg:text-right">
            <span className="text-sm font-bold text-[#E98945]">
              دنیای خوشمزه Foodora
            </span>

            <h2 className="mt-3 text-2xl font-black text-[#292D26] sm:text-3xl">
              برای هر سلیقه‌ای، یک دستور خوشمزه!
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#817F73]">
              از غذاهای ساده روزمره تا سفره‌های رنگارنگ مهمانی،
              انتخاب با توست.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {foodCategories.map((category) => (
              <div
                key={category.title}
                className="group rounded-3xl border border-[#E6E0D3] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#526B45]/40 hover:shadow-xl"
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${category.color}`}
                >
                  {category.icon}
                </div>

                <h3 className="text-lg font-extrabold text-[#292D26] transition group-hover:text-[#526B45]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#817F73]">
                  {category.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
