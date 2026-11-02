
import {
  BarChart3,
  Eye,
  Heart,
  ChefHat,
  TrendingUp,
  Clock,
  Trophy,
} from "lucide-react";

const weeklyData = [
  { day: "شنبه", views: 35 },
  { day: "یکشنبه", views: 55 },
  { day: "دوشنبه", views: 40 },
  { day: "سه‌شنبه", views: 75 },
  { day: "چهارشنبه", views: 60 },
  { day: "پنجشنبه", views: 90 },
  { day: "جمعه", views: 50 },
];

const popularRecipes = [
  { id: 1, title: "کیک شکلاتی", views: 1250, likes: 180 },
  { id: 2, title: "پاستا آلفردو", views: 850, likes: 120 },
  { id: 3, title: "سالاد سزار", views: 620, likes: 95 },
];

function Statistics() {
  const stats = [
    {
      title: "دستورهای ثبت‌شده",
      value: "۱۲",
      icon: ChefHat,
      color: "bg-[#526B45]/10 text-[#526B45]",
      change: "+۲ دستور جدید",
    },
    {
      title: "بازدید کل",
      value: "۳,۴۵۰",
      icon: Eye,
      color: "bg-blue-50 text-blue-600",
      change: "+۱۸٪ نسبت به هفته قبل",
    },
    {
      title: "پسندها",
      value: "۲۸۰",
      icon: Heart,
      color: "bg-red-50 text-red-500",
      change: "+۱۲٪ نسبت به هفته قبل",
    },
    {
      title: "میانگین زمان پخت",
      value: "۳۲ دقیقه",
      icon: Clock,
      color: "bg-orange-50 text-orange-500",
      change: "در تمام دستورها",
    },
  ];

  return (
    <section className="space-y-7">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-[#292D26]">
          آمار و عملکرد
        </h2>
        <p className="mt-2 text-sm text-[#817F73]">
          عملکرد و میزان تعامل کاربران با دستورهای غذایی تو.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-[#E6E0D3] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <Icon size={22} />
                </div>

                <TrendingUp size={18} className="text-[#526B45]" />
              </div>

              <p className="mt-5 text-sm text-[#817F73]">
                {stat.title}
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#292D26]">
                {stat.value}
              </h3>

              <p className="mt-3 text-xs text-[#526B45]">
                {stat.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* Weekly Chart */}
      <div className="rounded-2xl border border-[#E6E0D3] bg-white p-5 sm:p-7">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-[#292D26]">
              بازدیدهای هفتگی
            </h3>
            <p className="mt-2 text-xs text-[#817F73]">
              میزان بازدید دستورها در هفت روز گذشته
            </p>
          </div>

          <div className="rounded-xl bg-[#526B45]/10 p-3 text-[#526B45]">
            <BarChart3 size={22} />
          </div>
        </div>

        <div className="flex h-56 items-end justify-between gap-2 sm:gap-5">
          {weeklyData.map((item) => (
            <div
              key={item.day}
              className="flex h-full flex-1 flex-col items-center justify-end gap-3"
            >
              <span className="text-xs font-bold text-[#526B45]">
                {item.views}
              </span>

              <div className="flex h-40 w-full items-end justify-center rounded-t-lg bg-[#F7F3E8]">
                <div
                  style={{ height: `${item.views}%` }}
                  className="w-full max-w-10 rounded-t-lg bg-[#526B45] transition-all hover:bg-[#E98945]"
                />
              </div>

              <span className="text-[10px] text-[#817F73] sm:text-xs">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Recipes */}
      <div className="rounded-2xl border border-[#E6E0D3] bg-white p-5 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-[#E98945]/10 p-3 text-[#E98945]">
            <Trophy size={22} />
          </div>

          <div>
            <h3 className="font-black text-[#292D26]">
              محبوب‌ترین دستورها
            </h3>
            <p className="mt-1 text-xs text-[#817F73]">
              دستورهایی با بیشترین بازدید
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {popularRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-[#F7F3E8]/70 p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#526B45] text-sm font-black text-white">
                  {index + 1}
                </span>

                <h4 className="truncate text-sm font-bold text-[#292D26]">
                  {recipe.title}
                </h4>
              </div>

              <div className="flex shrink-0 items-center gap-3 text-xs text-[#817F73]">
                <span className="flex items-center gap-1">
                  <Eye size={15} />
                  {recipe.views}
                </span>

                <span className="flex items-center gap-1">
                  <Heart size={15} className="text-red-400" />
                  {recipe.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Statistics;
