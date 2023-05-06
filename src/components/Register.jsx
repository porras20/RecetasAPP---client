import React from "react";
import { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useSnackbar } from "notistack";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      enqueueSnackbar(
        "Se registró exitosamente. Por favor inicie sesión con su nueva cuenta",
        {
          variant: "success",
          preventDuplicate: true,
          anchorOrigin: { vertical: "top", horizontal: "center" },
        }
      );
      setUsername("");
      setPassword("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Form
      title="Register"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
}
