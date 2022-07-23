import React from 'react'
import SubmitButton from '../submitButton/SubmitButton';
import styles from "./loginForm.module.css"

const LoginForm = () => {
  const { bgLogin, border, inputBorder, inputBg, fontLogin, fontPass } = styles;
  return (
    <div className={`container-fluid ${bgLogin}`}>
      <div className=" row justify-content-center align-items-center vh-100" >
        <form className={`col-10 col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xxl-2 py-5 px-3 rounded ${border} d-flex flex-column align-items-center`}>
          <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>INICIAR SESION</h2>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${inputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="email" className={`form-control  ${inputBorder} `} placeholder="email" aria-label="email" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text  ${inputBorder} ${inputBg}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="password" className={`form-control  ${inputBorder}`} placeholder="password" aria-label="password" aria-describedby="basic-addon1"/>
          </div>      
          <SubmitButton />   
          <span className={`text-center mt-5 pt-4 ${fontPass}`}>¿No estas registrado?</span>
          <span className={`text-center ${fontPass}`}>¿Olvidaste tu contraseña?</span>
        </form>
      </div>
    </div>
  );
}

export default LoginForm