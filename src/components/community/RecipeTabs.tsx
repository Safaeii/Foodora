
interface RecipeTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  { id: "all", label: "همه دستورها", icon: "🍽️" },
  { id: "popular", label: "پرطرفدارترین", icon: "🔥" },
  { id: "latest", label: "جدیدترین", icon: "✨" },
  { id: "budget", label: "اقتصادی‌ترین", icon: "💰" },
  { id: "quick", label: "سریع‌ترین", icon: "⚡" },
  { id: "healthy", label: "سالم‌ترین", icon: "🥗" },
];

function RecipeTabs({ activeTab, onChange }: RecipeTabsProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex min-w-max gap-3 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-[#526B45] text-white shadow-lg"
                : "border border-[#E6E0D3] bg-white text-[#817F73] hover:border-[#526B45]"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecipeTabs;
