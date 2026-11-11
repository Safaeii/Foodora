
import MealCategoryPage from "./meals/MealCategoryPage";
import { getVegetarianMeals } from "../services/mealService";

function VegetarianMeals() {
  return (
    <MealCategoryPage
      title="دنیای غذاهای گیاهی"
      badge="مجموعه غذاهای گیاهی"
      description="مجموعه‌ای از غذاهای رنگارنگ و خوشمزه با مواد اولیه گیاهی."
      getMeals={getVegetarianMeals}
    />
  );
}

export default VegetarianMeals;
