import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full py-5 px-8 bg-black flex items-center justify-between">
      <div className="text-white uppercase font-[Poppins] text-xl flex flex-col gap-3">
        <Link to="/auth" className="hover:text-cyan-500 duration-300">Sign up</Link>
        <Link to="/create-recipe" className="hover:text-cyan-500 duration-300">Create a recipe</Link>
        <Link className="hover:text-cyan-500 duration-300">Download the app</Link>
      </div>
      <div className="bg-white h-24 w-1 ml-5"></div>
      <div className="text-white flex flex-col items-center justify-center w-3/5 mb-3">
        <div className="flex justify-between w-full">
          <BsFacebook className="text-3xl cursor-pointer hover:text-cyan-500 duration-300" />
          <BsInstagram className="text-3xl cursor-pointer hover:text-cyan-500 duration-300" />
          <BsLinkedin className="text-3xl cursor-pointer hover:text-cyan-500 duration-300" />
          <BsYoutube className="text-3xl cursor-pointer hover:text-cyan-500 duration-300" />
        </div>
        <div className="text-white mt-8"> Copyright 2023 &copy;</div>
      </div>
    </div>
  );
}
