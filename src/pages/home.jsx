import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiDish, BiTimer } from "react-icons/bi";
import { TbSalt } from "react-icons/tb";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { userGetUserId } from "../hooks/useGetUserId";
import {
  MdOutlineIntegrationInstructions,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = userGetUserId();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          ` http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSavedRecipe();
    fetchRecipe();
  }, []);
  // añadir dependiencias recipes

  const saveRecipe = async (recipeId) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeId,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (error) {
      console.error(error);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="flex items-center my-5 mx-auto flex-col text-center">
      <h2 className="text-2xl font-[Poppins] text-gray-700 uppercase font-bold">
        All recipes
      </h2>
      <div className="mt-7 w-full flex flex-col gap-5 px-28">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-neutral-200 rounded-lg shadow py-5 flex flex-col items-center w-full gap-5"
          >
            <div>
              {savedRecipes.includes(recipe._id) && <h2>Alredy saved</h2>}
            </div>
            <div className="w-full flex justify-center">
              <h2 className="flex justify-center items-center gap-3 font-[Poppins] text-3xl capitalize font-bold text-gray-600">
                {recipe.name} <BiDish />
              </h2>
            </div>
            <div class="relative w-full h-64 flex items-center">
              <div className="cursor-pointer absolute text-4xl">
                <div
                  className={`mb-5 ${
                    isRecipeSaved(recipe._id) && "pointer-events-none hidden"
                  }`}
                  onClick={() => saveRecipe(recipe._id)}
                >
                  <MdFavoriteBorder />
                </div>
                {/* <div className="">
                  <FaRegBookmark />
                </div> */}
              </div>
              <img
                src={recipe.imageUrl}
                alt="Imagen"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="">
              <h2 className="flex gap-3 justify-center items-center font-[Poppins] text-2xl capitalize font-bold text-gray-600">
                Ingredients <TbSalt />
              </h2>
              <ul className="flex px-5 gap-5 text-white mt-5">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-md capitalize cursor-pointer shadow hover:bg-gray-500 duration-200"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="flex justify-center items-center gap-3 mb-5 font-[Poppins] text-2xl capitalize font-bold text-gray-600">
                Instructions <MdOutlineIntegrationInstructions />
              </h2>
              <p>{recipe.instructions}</p>
            </div>
            <div className="cooking">
              <h2 className="flex justify-center items-center gap-3 mb-5 font-[Poppins] text-2xl capitalize font-bold text-gray-600">
                Cooking Time <BiTimer />
              </h2>
              <span>{recipe.cookingTime} Minutes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
