import React from "react";

export default function SavedRecipesModal({
  dataModal,
  setDataModal,
  setIsOpenModal,
}) {
  const closeModal = () => {
    setIsOpenModal(false);
    setDataModal([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdroup-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded w-72 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-center text-3xl text-gray-700 font-[Poppins]">
          {dataModal.name}
        </h1>
        <div className="mx-4">
          <img src={dataModal.imageUrl} alt="" />
        </div>
        <div className="w-full text-center mt-3">
          <h3 className="text-xl font-semibold font-[Poppins] text-gray-700 capitalize">
            Ingredients
          </h3>
          <ul className="flex justify-around">
            {dataModal.ingredients.map((ingredient, index) => (
              <li className="capitalize font-semibold" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-3">
          <h3 className="text-xl font-semibold font-[Poppins] text-gray-700 capitalize">
            Intructions
          </h3>
          <p>{dataModal.instructions}</p>
        </div>
        <div className="mt-3 w-full">
          <button
            className="bg-red-500 text-white uppercase font-bold shadow w-full rounded hover:bg-red-400 duration-200 py-2"
            onClick={closeModal}
          >
            Close modal
          </button>
        </div>
      </div>
    </div>
  );
}
