
interface RecipeFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

function RecipeFilters({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}: RecipeFiltersProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Search */}
      <div className="relative w-full md:max-w-md">
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="جست‌وجوی نام غذا..."
          className="w-full rounded-2xl border border-[#E6E0D3] bg-white py-4 pr-12 pl-4 text-sm outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
        />
      </div>

      {/* Sort */}
      <div className="flex items-center gap-3">
        <label className="whitespace-nowrap text-sm font-bold text-[#817F73]">
          مرتب‌سازی:
        </label>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-2xl border border-[#E6E0D3] bg-white px-4 py-4 text-sm font-bold text-[#526B45] outline-none focus:border-[#526B45] sm:w-52"
        >
          <option value="latest">جدیدترین</option>
          <option value="popular">محبوب‌ترین</option>
          <option value="cheapest">ارزان‌ترین</option>
          <option value="quickest">سریع‌ترین</option>
        </select>
      </div>
    </div>
  );
}

export default RecipeFilters;
