import React, { useState } from "react";
import Form from "./Form";
import axios from "axios"
import {Cookies, useCookies} from "react-cookie"
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(['access_token'])
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:3001/auth/login', {
            username,
            password
        });
        setCookies('access_token', response.data.token);
        window.localStorage.setItem('userID', response.data.userID);
        console.log(response.data.userID);
        navigate('/');
    } catch (err) {
        console.error(err);
    }
  }

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
