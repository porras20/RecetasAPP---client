import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreateRecipes from "./pages/createRecipes";
import SavedRecipes from "./pages/savedRecipes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-recipes" element={<CreateRecipes />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
