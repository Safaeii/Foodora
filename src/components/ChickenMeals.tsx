
import MealCategoryPage from "./meals/MealCategoryPage";
import { getChickenMeals } from "../services/mealService";

function ChickenMeals() {
  return (
    <MealCategoryPage
      title="دنیای غذاهای مرغی"
      badge="مجموعه غذاهای مرغی"
      description="مجموعه‌ای از خوشمزه‌ترین غذاهای تهیه‌شده با مرغ را کشف کنید."
      getMeals={getChickenMeals}
    />
  );
}

export default ChickenMeals;
