
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Chicken from "./components/chicken";
import MealDetails from "./pages/MealDetails";
import BeefMeals from "./components/BeefMeals";
import SeafoodMeals from "./components/SeafoodMeals";
import VegetarianMeals from "./components/VegetarianMeals";
import DessertMeals from "./components/DessertMeals";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Chicken />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/beef" element={<BeefMeals />} />
        <Route path="/meals/:id" element={<MealDetails />} />
        <Route path="/seafood" element={<SeafoodMeals />} />
        <Route path="/vegetarian" element={<VegetarianMeals />} />
        <Route path="/desserts" element={<DessertMeals />} />
      </Routes>
    </>
  );
}

export default App;
