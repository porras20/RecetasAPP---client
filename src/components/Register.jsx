import React from "react";
import { useState } from "react";
import Form from "./Form";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
        await axios.post('http://localhost:3001/auth/register', {
            username,
            password,
        });
        alert('Registration completed successfully');
        setUsername('');
        setPassword('');
    } catch (err) {
        alert(err.message);
    }
  }

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
