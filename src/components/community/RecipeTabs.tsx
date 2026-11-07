

import { Flame, Clock3, Wallet } from "lucide-react";

interface RecipeTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  {
    id: "popular",
    title: "محبوب‌ترین",
    icon: Flame,
  },
  {
    id: "latest",
    title: "جدیدترین",
    icon: Clock3,
  },
  {
    id: "budget",
    title: "کم‌هزینه‌ترین",
    icon: Wallet,
  },
];

function RecipeTabs({ activeTab, setActiveTab }: RecipeTabsProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${
              isActive
                ? "bg-[#B85C38] text-white shadow-md"
                : "border border-[#E9DFD4] bg-[#FFFEFC] text-[#84786F] hover:border-[#B85C38] hover:text-[#B85C38]"
            }`}
          >
            <Icon size={18} />
            <span>{tab.title}</span>
          </button>
        );
      })}
    </div>
  );
}

export default RecipeTabs;
