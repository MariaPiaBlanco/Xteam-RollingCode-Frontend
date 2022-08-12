import React from 'react'
import styles from "./loginSucces.module.css"
import logoImg from "../../assets/xteam.png";
import logoImg2 from "../../assets/images/assassins.png";
import 'animate.css';
import { useNavigate } from 'react-router-dom';

const LoginSucces = () => {
  const { bgBody, fontStyle } = styles
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/")
  }, 1500);

  return (
    <div className={`${bgBody} container-fluid`}>
      <div className="row justify-content-center animate__animated animate__zoomIn">
        <div className="col-12 text-center m-5">
          <img className={`col-1`} src={logoImg} alt="" />
        </div>
        <img className={`col-3 pb-5 mb-5 `} src={logoImg2} alt="" />
        <h2 className={`text-center mb-5 display-5 fw-bold ${fontStyle}`}>Logueado con exito</h2>
      </div>
    </div>
  )
}

export default LoginSucces