import React from 'react'
import styles from "./loginSucces.module.css"
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import xteam from '../../assets/xteam.png'

const LoginSucces = () => {
  const { bgBody, fontStyle } = styles
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/")
  }, 1500);

  return (
    <div className={`${bgBody} container-fluid`}>
      <div className="row justify-content-center animate__animated animate__zoomIn">
        <img className={`col-3 pb-5 mb-5 `} src={xteam} alt="" />
        <h2 className={`text-center mb-5 display-5 fw-bold ${fontStyle}`}>Logueado con exito</h2>
      </div>
    </div>
  )
}

export default LoginSucces