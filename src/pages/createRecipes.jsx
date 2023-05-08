import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import axios from "axios";
import { userGetUserId } from "../hooks/useGetUserId";
import {useNavigate} from 'react-router-dom';

export default function CreateRecipes() {

  const userID = userGetUserId();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value } = e.target;
    console.log(name);
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientsChange = (e, index) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const validateForm = (e) => {
    e.preventDefault()
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/recipes', recipe);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h2 className="text-3xl capitalize font-[Poppins] mb-5 font-bold text-gray-900">
        Create recipes
      </h2>
      <form action="" className="" onSubmit={(e) => validateForm(e)}>
        <div className="flex mb-5 gap-5 justify-center">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-gray-500 focus:shadow-xl duration-300 "
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Image URL"
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-gray-500 focus:shadow-xl duration-300"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-bold mb-2"
            >
              Ingredients
            </label>
            {recipe.ingredients.map((ingredient, index) => (
              <input
                type="text"
                key={index}
                name="ingredients"
                value={ingredient}
                onChange={(e) => handleIngredientsChange(e, index)}
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-gray-500 focus:shadow-xl duration-300"
              />
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="bg-green-500 rounded-full flex justify-center items-center text-white gap-3 cursor-pointer"
            >
              {" "}
              Add <span className="text-white"><GrAddCircle className="text-blue text-xl"/></span>
            </button>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cookingTime"
              className="block text-gray-700 font-bold mb-2"
            >
              Cooking time (minutes)
            </label>
            <input
              type="number"
              id="cookingTime"
              name="cookingTime"
              placeholder="Cooking time"
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-gray-500 focus:shadow-xl duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="4"
              placeholder="Description"
              onChange={(e) => handleChange(e)}
              className="p-3 rounded-sm shadow outline-none focus:outline-slate-800 focus:shadow-xl duration-200"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="instructions"
              className="block text-gray-700 font-bold mb-2"
            >
              Instructions
            </label>
            <textarea
              name="instructions"
              id="instructions"
              placeholder="Instructions"
              cols="30"
              rows="4"
              onChange={(e) => handleChange(e)}
              className="p-3 rounded-sm shadow outline-none focus:outline-slate-800 focus:shadow-xl duration-200"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-gray-700 py-2 text-white text-xl rounded-lg hover:bg-gray-900 duration-300 w-full shadow-sm"
          >
            Save recipe
          </button>
        </div>
      </form>
    </div>
  );
}
