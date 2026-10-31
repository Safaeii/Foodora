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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/beef" element={<BeefMeals />} />
        <Route path="/seafood" element={<SeafoodMeals />} />
        <Route path="/vegetarian" element={<VegetarianMeals />} />
        <Route path="/desserts" element={<DessertMeals />} />

        <Route path="/meals/:id" element={<MealDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;