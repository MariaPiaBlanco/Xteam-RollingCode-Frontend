import React, { useState } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  window.addEventListener("load", ()=>{
      localStorage.getItem("token") && navigate("/");
      localStorage.removeItem("token")
  })

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/users/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token)
          navigate("/")
        });
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <LoginForm
      handleLogin={handleLogin}
      email={setEmail}
      password={setPassword}
    />
  );
};

export default Login;
