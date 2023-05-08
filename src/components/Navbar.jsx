import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/img/logoblue.png";
import { useSnackbar } from "notistack";

export default function Navbar() {
  const [cookies, setCokkies] = useCookies("access_token");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const logout = () => {
    setCokkies("access_token", "");
    window.localStorage.removeItem("userID");
    enqueueSnackbar("se cerró la sesión correctamente", {
      variant: "success",
      anchorOrigin: { vertical: "top", horizontal: "center" },
    });
    navigate("/auth");
  };
  const idUser = window.localStorage.getItem("userID");

  return (
    <nav className="p-5 bg-black shadow md:flex md:items-center md:justify-between">
      <div>
        <span className="text-2xl text-white font-[Poppins] cursor-pointer">
          <img src={logo} className="h-12 inline mr-5 rounded-full" alt="" />
          RecetasApp
        </span>
      </div>
      <ul className="text-white md:flex md:items-center gap-5 text-xl">
        <li className="hover:text-cyan-500 duration-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-cyan-500 duration-500">
          <Link to="/create-recipe">Create recipe</Link>
        </li>
        <li className=" hover:text-cyan-500 duration-500">
          <Link to="/saved-recipes">Saved recipes</Link>
        </li>
        {!idUser ? (
          <li className="bg-cyan-400 font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded-lg">
            <Link to="/auth">Get Started</Link>
          </li>
        ) : (
          <button
            className="bg-red-400 font-[Poppins] py-2 px-6 rounded-lg hover:bg-red-600 duration-300"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}
