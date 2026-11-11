
import { SlidersHorizontal, Tags, ArrowDownUp } from "lucide-react";

import type {
  CommunityMealCategory,
  RecipeSort,
} from "../../types/community";

interface RecipeFiltersProps {
  selectedCategory: CommunityMealCategory;
  setSelectedCategory: (category: CommunityMealCategory) => void;
  sortBy: RecipeSort;
  setSortBy: (sort: RecipeSort) => void;
}

const categories = [
  { id: "all", title: "همه دسته‌ها" },
  { id: "Breakfast", title: "صبحانه" },
  { id: "Lunch", title: "ناهار" },
  { id: "Dinner", title: "شام" },
  { id: "Dessert", title: "دسر" },
  { id: "Snack", title: "میان‌وعده" },
] satisfies {
  id: CommunityMealCategory;
  title: string;
}[];

function RecipeFilters({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: RecipeFiltersProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 rounded-2xl border border-[#E9DFD4] bg-[#FFFEFC] p-4">
      <div className="flex items-center gap-2 text-[#84786F]">
        <SlidersHorizontal size={19} />
        <span className="text-sm font-semibold">
          فیلتر دستورها
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Tags size={17} className="text-[#687653]" />

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(
              event.target.value as CommunityMealCategory
            )
          }
          className="rounded-lg border border-[#E9DFD4] bg-[#FAF7F2] px-3 py-2 text-sm outline-none focus:border-[#B85C38]"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <ArrowDownUp size={17} className="text-[#687653]" />

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value as RecipeSort)
          }
          className="rounded-lg border border-[#E9DFD4] bg-[#FAF7F2] px-3 py-2 text-sm outline-none focus:border-[#B85C38]"
        >
          <option value="popular">محبوب‌ترین</option>
          <option value="latest">جدیدترین</option>
          <option value="cheapest">کم‌هزینه‌ترین</option>
          <option value="quickest">سریع‌ترین</option>
        </select>
      </div>
    </div>
  );
}

export default RecipeFilters;
