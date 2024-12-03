import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import ExploreMeals from "./pages/ExploreMeals";
import TipsNutrition from "./pages/TipsNutrition";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/explore-meals" element={<ExploreMeals />} />
        <Route path="/tips-nutrition" element={<TipsNutrition />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
