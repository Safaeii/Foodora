
import { useState, lazy, Suspense } from "react";
import {
  ChefHat,
  Plus,
  BookOpen,
  Heart,
  Eye,
  Clock,
  TrendingUp,
} from "lucide-react";

import DashboardSidebar, {
  type DashboardTab,
} from "../components/dashboard/DashboardSidebar";

// بارگذاری جداگانه بخش‌ها
const AddRecipeForm = lazy(
  () => import("../components/dashboard/AddRecipeForm")
);

const MyRecipes = lazy(
  () => import("../components/dashboard/MyRecipes")
);

const SavedRecipes = lazy(
  () => import("../components/dashboard/SavedRecipes")
);

const Statistics = lazy(
  () => import("../components/dashboard/Statistics")
);

const MyProfile = lazy(
  () => import("../components/dashboard/MyProfile")
);

const AccountSettings = lazy(
  () => import("../components/dashboard/AccountSettings")
);

const pageTitles: Record<DashboardTab, string> = {
  overview: "نمای کلی",
  "my-recipes": "دستورهای من",
  saved: "غذاهای ذخیره‌شده",
  statistics: "آمار و عملکرد",
  profile: "پروفایل من",
  settings: "تنظیمات حساب",
};

function Dashboard() {
  const [activeTab, setActiveTab] =
    useState<DashboardTab>("overview");

  const [showRecipeForm, setShowRecipeForm] =
    useState(false);

  // تغییر بخش داشبورد
  const handleTabChange = (tab: DashboardTab) => {
    setActiveTab(tab);
    setShowRecipeForm(false);
  };

  // باز کردن فرم افزودن دستور
  const handleOpenForm = () => {
    setActiveTab("overview");
    setShowRecipeForm(true);
  };

  // اطلاعات نمونه کارت‌های آمار
  const stats = [
    {
      title: "دستورهای من",
      value: "۱۲",
      icon: ChefHat,
      color: "bg-[#526B45]/10 text-[#526B45]",
      description: "دستور ثبت‌شده",
    },
    {
      title: "غذاهای ذخیره‌شده",
      value: "۲۴",
      icon: BookOpen,
      color: "bg-orange-50 text-[#E98945]",
      description: "دستور مورد علاقه",
    },
    {
      title: "پسندها",
      value: "۱۸۰",
      icon: Heart,
      color: "bg-red-50 text-red-500",
      description: "پسند دریافت‌شده",
    },
    {
      title: "بازدیدها",
      value: "۱,۲۰۰",
      icon: Eye,
      color: "bg-blue-50 text-blue-600",
      description: "بازدید از دستورها",
    },
  ];

  // فعالیت‌های اخیر نمونه
  const activities = [
    {
      id: 1,
      title: "پاستا آلفردو",
      description: "دستور غذایی جدید ثبت شد.",
      time: "۲ ساعت پیش",
      icon: ChefHat,
    },
    {
      id: 2,
      title: "سالاد سزار",
      description: "۱۲ پسند جدید دریافت کردی.",
      time: "دیروز",
      icon: Heart,
    },
    {
      id: 3,
      title: "کیک شکلاتی",
      description: "دستور تو ۱۲۰ بازدید داشته.",
      time: "۳ روز پیش",
      icon: Eye,
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F7F3E8] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">

        {/* Dashboard Sidebar - منوی کناری */}
        <DashboardSidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* Main Content - محتوای اصلی */}
        <section className="min-w-0 flex-1">

          {/* Dashboard Header - سربرگ داشبورد */}
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="mb-2 text-sm text-[#817F73]">
                پنل مدیریت شخصی
              </p>

              <h1 className="text-2xl font-black text-[#292D26] sm:text-3xl">
                {activeTab === "overview"
                  ? "سلام، خوش اومدی! 👋"
                  : pageTitles[activeTab]}
              </h1>

              <p className="mt-2 text-sm text-[#817F73]">
                فعالیت‌های آشپزی خودت رو از اینجا مدیریت کن.
              </p>
            </div>

            <button
              type="button"
              onClick={handleOpenForm}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#526B45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#405638]"
            >
              <Plus size={19} />
              افزودن دستور جدید
            </button>

          </div>

          {/* Dashboard Sections */}
          <Suspense
            fallback={
              <div className="flex min-h-80 items-center justify-center rounded-3xl bg-white">
                <p className="font-bold text-[#526B45]">
                  در حال بارگذاری بخش...
                </p>
              </div>
            }
          >

            {/* Add Recipe Form - فرم افزودن دستور */}
            {showRecipeForm && (
              <AddRecipeForm
                onClose={() => setShowRecipeForm(false)}
              />
            )}

            {/* My Recipes - دستورهای من */}
            {activeTab === "my-recipes" && <MyRecipes />}

            {/* Saved Recipes - غذاهای ذخیره‌شده */}
            {activeTab === "saved" && <SavedRecipes />}

            {/* Statistics - آمار و عملکرد */}
            {activeTab === "statistics" && <Statistics />}

            {/* My Profile - پروفایل من */}
            {activeTab === "profile" && <MyProfile />}

            {/* Account Settings - تنظیمات حساب */}
            {activeTab === "settings" && <AccountSettings />}

          </Suspense>

          {/* Overview - نمای کلی */}
          {activeTab === "overview" && !showRecipeForm && (
            <>

              {/* Statistics Cards - کارت‌های آماری */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

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

                        <TrendingUp
                          size={18}
                          className="text-[#526B45]"
                        />
                      </div>

                      <p className="mt-5 text-sm text-[#817F73]">
                        {stat.title}
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-[#292D26]">
                        {stat.value}
                      </h3>

                      <p className="mt-2 text-xs text-[#526B45]">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}

              </div>

              {/* Recent Activity - فعالیت‌های اخیر */}
              <div className="mt-7 rounded-3xl border border-[#E6E0D3] bg-white p-5 sm:p-7">

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-[#292D26]">
                      فعالیت‌های اخیر
                    </h2>

                    <p className="mt-2 text-xs text-[#817F73]">
                      آخرین اتفاقات حساب کاربری تو
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#526B45]/10 p-3 text-[#526B45]">
                    <Clock size={21} />
                  </div>
                </div>

                <div className="space-y-4">
                  {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between gap-3 rounded-2xl bg-[#F7F3E8]/70 p-4"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="shrink-0 rounded-xl bg-white p-3 text-[#526B45]">
                            <Icon size={20} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-bold text-[#292D26]">
                              {activity.title}
                            </h3>

                            <p className="mt-1 text-xs text-[#817F73]">
                              {activity.description}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 text-[11px] text-[#817F73]">
                          {activity.time}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Banner - بنر پایینی */}
              <div className="mt-7 flex flex-col justify-between gap-5 rounded-3xl bg-[#526B45] p-6 text-white sm:flex-row sm:items-center sm:p-8">

                <div>
                  <h2 className="text-xl font-black">
                    دستور جدیدی برای اشتراک‌گذاری داری؟
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    تجربه‌های آشپزی خودت رو با جامعه Foodora به اشتراک بذار.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleOpenForm}
                  className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#526B45] transition hover:bg-[#F7F3E8]"
                >
                  <Plus size={18} />
                  ثبت دستور جدید
                </button>

              </div>

            </>
          )}

        </section>
      </div>
    </main>
  );
}

export default Dashboard;
