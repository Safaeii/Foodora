
import MealCategoryPage from "./meals/MealCategoryPage";
import { getSeafoodMeals } from "../services/mealService";

function SeafoodMeals() {
  return (
    <MealCategoryPage
      title="دنیای غذاهای دریایی"
      badge="مجموعه غذاهای دریایی"
      description="با غذاهای دریایی متنوع و خوشمزه، طعم تازه‌ای را تجربه کنید."
      getMeals={getSeafoodMeals}
    />
  );
}

export default SeafoodMeals;

