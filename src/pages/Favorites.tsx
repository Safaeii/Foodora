import useFavorites from "../hooks/useFavorites";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div dir="rtl" className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold text-[#352820]">
        غذاهای موردعلاقه من
      </h1>
      {favorites.length === 0 ? (
  <p className="text-[#84786F]">
    هنوز غذایی به علاقه‌مندی‌هات اضافه نکردی.
  </p>
) : (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {favorites.map((meal) => (
      <div
        key={meal.idMeal}
        className="overflow-hidden rounded-2xl border border-[#E9DFD4] bg-[#FFFEFC]"
      >
        <Link to={`/meals/${meal.idMeal}`}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="h-48 w-full object-cover"
          />
          <h2 className="p-4 font-bold text-[#352820]">
            {meal.strMeal}
          </h2>
        </Link>

        <button
          onClick={() => removeFavorite(meal.idMeal)}
          className="mb-4 mr-4 rounded-lg bg-[#B85C38] px-4 py-2 text-white"
        >
          حذف از علاقه‌مندی‌ها
        </button>
      </div>
    ))}
  </div>
)}
    </div>
  );
}

export default Favorites;