
import {
  LayoutDashboard,
  ChefHat,
  Bookmark,
  ChartNoAxesColumnIncreasing,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";

export type DashboardTab =
  | "overview"
  | "my-recipes"
  | "saved"
  | "statistics"
  | "profile"
  | "settings";

interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

function DashboardSidebar({
  activeTab,
  onTabChange,
}: DashboardSidebarProps) {
  const menuItems = [
    {
      id: "overview",
      label: "نمای کلی",
      icon: LayoutDashboard,
    },
    {
      id: "my-recipes",
      label: "دستورهای من",
      icon: ChefHat,
    },
    {
      id: "saved",
      label: "غذاهای ذخیره‌شده",
      icon: Bookmark,
    },
    {
      id: "statistics",
      label: "آمار و عملکرد",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      id: "profile",
      label: "پروفایل من",
      icon: UserRound,
    },
    {
      id: "settings",
      label: "تنظیمات",
      icon: Settings,
    },
  ] as const;

  return (
    <aside className="w-full shrink-0 rounded-3xl bg-[#526B45] p-5 text-white lg:min-h-[calc(100vh-48px)] lg:w-64">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-white/15 p-3">
          <ChefHat size={27} />
        </div>

        <div>
          <h2 className="text-xl font-black">Foodora</h2>
          <p className="text-xs text-white/60">پنل کاربری</p>
        </div>
      </div>

      <p className="mb-4 text-xs text-white/50">
        منوی اصلی
      </p>

      {/* Navigation */}
      <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`flex shrink-0 items-center gap-3 rounded-xl p-3 text-sm transition lg:w-full ${
                isActive
                  ? "bg-white text-[#526B45]"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-6 border-t border-white/15 pt-5 lg:mt-10">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl p-3 text-sm text-white/70 transition hover:bg-white/10"
        >
          <LogOut size={19} />
          خروج از حساب
        </button>
      </div>

    </aside>
  );
}

export default DashboardSidebar;
