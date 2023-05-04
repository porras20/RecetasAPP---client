import React from "react";
import { useEffect, useState } from "react";

export default function Form({
  title,
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
}) {
  const [error, setError] = useState(true);

  useEffect(() => {
    const validateForm = () => {
      if (password === "" || username === "") {
        setError(true);
        return;
      }
      setError(false);
    };
    validateForm();
  }, [username, password]);

  return (
    <div className="flex-1 flex justify-center items-center">
      <form
        action=""
        className="w-9/12 bg-indigo-200 p-5 text-center rounded-lg"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-5">{title}</h2>
        <div className="flex flex-col m-5">
          <label htmlFor="username" className="text-lg capitalize">
            username
          </label>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-5">
          <label htmlFor="password" className="text-lg capitalize">
            password:{" "}
          </label>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`${
              error && "pointer-events-none opacity-50"
            } bg-gray-700 py-2 text-white text-xl rounded-lg hover:bg-gray-900 duration-300 w-full shadow-sm`}
          >
            {title}
          </button>
        </div>
      </form>
    </div>
  );
}
