
import MealCategoryPage from "./meals/MealCategoryPage";
import { getBeefMeals } from "../services/mealService";

function BeefMeals() {
  return (
    <MealCategoryPage
      title="دنیای غذاهای گوشتی"
      badge="مجموعه غذاهای گوشتی"
      description="با مجموعه‌ای از غذاهای خوشمزه و متنوع گوشتی آشنا شوید."
      getMeals={getBeefMeals}
    />
  );
}

export default BeefMeals;
