
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Chicken from "./components/chicken";
import BeefMeals from "./components/BeefMeals";
import SeafoodMeals from "./components/SeafoodMeals";
import VegetarianMeals from "./components/VegetarianMeals";
import DessertMeals from "./components/DessertMeals";

import MealDetails from "./pages/MealDetails";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";

import CommunityRecipes from "./pages/CommunityRecipes";
import CommunityRecipeDetails from "./pages/CommunityRecipeDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Meal Categories */}
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/beef" element={<BeefMeals />} />
        <Route path="/seafood" element={<SeafoodMeals />} />
        <Route path="/vegetarian" element={<VegetarianMeals />} />
        <Route path="/desserts" element={<DessertMeals />} />

        {/* Meal Details & Search */}
        <Route path="/meals/:id" element={<MealDetails />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Community */}
        <Route path="/community" element={<CommunityRecipes />} />

        <Route
          path="/community/recipes/:id"
          element={<CommunityRecipeDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
