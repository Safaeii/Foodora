
import MealCategoryPage from "./meals/MealCategoryPage";
import { getDessertMeals } from "../services/mealService";

function DessertMeals() {
  return (
    <MealCategoryPage
      title="دنیای دسرها"
      badge="مجموعه دسرهای خوشمزه"
      description="با انواع دسرهای جذاب و شیرین، لحظات خوشمزه‌ای بسازید."
      getMeals={getDessertMeals}
    />
  );
}

export default DessertMeals;
