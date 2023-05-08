import React, { useEffect, useState } from "react";
import { userGetUserId } from "../hooks/useGetUserId";
import axios from "axios";
import SavedRecipesModal from "./SavedRecipesModal";

export default function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const userID = userGetUserId();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSavedRecipes();
  }, []);

  const toggleModal = (data) => {
    setIsOpenModal(true);
    setDataModal(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-20 p-5">
      <h2 className="text-3xl text-gray-700 uppercase font-[Poppins] font-bold">
        saved recipes
      </h2>
      <div className="bg-neutral-200 w-full p-5 my-5 rounded flex items-center justify-center gap-5">
        {savedRecipes.map((recipe) => (
          <div
            className="card bg-white rounded-lg cursor-pointer hover:-translate-y-3 duration-200 "
            key={recipe._id}
            onClick={() => toggleModal(recipe)}
          >
            <h2 className="text-2xl font-bold my-2 text-center text-gray-800">
              {recipe.name}
            </h2>
            <img src={recipe.imageUrl} alt="" className="w-40" />
          </div>
        ))}
        {isOpenModal && (
          <SavedRecipesModal
            dataModal={dataModal}
            setIsOpenModal={setIsOpenModal}
            setDataModal={setDataModal}
          />
        )}
      </div>
    </div>
  );
}
