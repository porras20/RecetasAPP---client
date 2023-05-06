import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      if (response.data.userID) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        enqueueSnackbar("Credenciales correctas", {
          variant: "success",
          preventDuplicate: true,
          anchorOrigin:{ vertical: 'top', horizontal: 'center'}
        });
        navigate("/");
      } else {
        enqueueSnackbar("Credenciales inválidas", {
          variant: "error",
          preventDuplicate: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      title={"Login"}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
}
