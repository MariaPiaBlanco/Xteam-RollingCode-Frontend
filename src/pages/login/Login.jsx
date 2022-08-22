import React, { useState } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();
    if(email === undefined || password === undefined){
      alert("Todos los campos son requeridos")
    } else {
      try {
        await axios
          .post(`${process.env.REACT_APP_URL_BASE}/users/login`, {
            email: email,
            password: password,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("admin", response.data.admin)
            navigate("/loginsucces")
          });
      } catch (error) {
        alert(error.response.data.msg);
      }
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
