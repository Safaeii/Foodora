
import { Link } from "react-router-dom";

function CommunityHero() {
  return (
    <section className="overflow-hidden bg-[#F7F3E8] px-5 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Content */}
        <div className="text-right">

          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#526B45]/10 px-5 py-2 text-sm font-bold text-[#526B45]">
            <span>🌿</span>
            جامعه دوست‌داران آشپزی
          </span>

          <h1 className="text-4xl font-black leading-[1.7] text-[#292D26] sm:text-5xl lg:text-6xl">
            طعم خلاقیت،
            <br />
            <span className="text-[#526B45]">
              اشتراک‌گذاری
            </span>
            <br />
            تجربه‌ها
          </h1>

          <p className="mt-6 max-w-lg text-base leading-9 text-[#817F73] sm:text-lg">
            دستورهای آشپزی خودت رو با دیگران به اشتراک بذار،
            از تجربه آشپزهای دیگه یاد بگیر و هر روز طعم جدیدی
            رو کشف کن.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="rounded-2xl bg-[#526B45] px-7 py-4 font-bold text-white shadow-lg shadow-[#526B45]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#405638]"
            >
              شروع آشپزی و عضویت
              <span className="mr-2">←</span>
            </Link>

            <a
              href="#recipes"
              className="rounded-2xl border border-[#526B45]/30 bg-white px-7 py-4 font-bold text-[#526B45] transition duration-300 hover:-translate-y-1 hover:bg-[#526B45]/5"
            >
              کشف دستورها
            </a>

          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-7">

            <div>
              <p className="text-2xl font-black text-[#526B45]">
                🍽
              </p>
              <span className="mt-2 block text-sm text-[#817F73]">
                دستورهای متنوع
              </span>
            </div>

            <div>
              <p className="text-2xl font-black text-[#526B45]">
                ❤️
              </p>
              <span className="mt-2 block text-sm text-[#817F73]">
                اشتراک‌گذاری علاقه
              </span>
            </div>

            <div>
              <p className="text-2xl font-black text-[#526B45]">
                👩‍🍳
              </p>
              <span className="mt-2 block text-sm text-[#817F73]">
                ارتباط با آشپزها
              </span>
            </div>

          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#E98945]/20 blur-3xl" />

          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#526B45]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000"
              alt="غذای سالم و خوشمزه"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 right-6 left-6 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <p className="text-sm font-medium text-[#817F73]">
                آشپزی یعنی به اشتراک گذاشتن عشق ❤️
              </p>

              <h3 className="mt-2 text-xl font-black text-[#292D26]">
                هر غذا، یک داستان تازه!
              </h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CommunityHero;
