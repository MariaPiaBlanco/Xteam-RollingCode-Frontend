import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./registerForm.module.css"
import SubmitButton from '../submitButton/SubmitButton';

const RegisterForm = ({ fullName, email, password1, password2, handleForm }) => {
  const { bgRegister, border, inputBorder, inputBg, iconInputBg, fontLogin, fontPass } = styles;
  const btnMensage = "Registrate";
  return (
    <div className={`container-fluid`}>
      <div className=" row justify-content-center align-items-center vh-100" >
        <form className={`col-10 col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xxl-2 py-5 px-3 rounded ${bgRegister} ${border} d-flex flex-column align-items-center`} onSubmit={handleForm} >
          <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Registrate</h2>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name='user' color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Nombre" aria-label="text" aria-describedby="basic-addon1" maxLength={25} onChange={(e)=>{fullName(e.target.value)}} />
          </div>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg} `} placeholder="Email" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>{email(e.target.value)}} />
          </div>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text  ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="password" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Password" aria-label="password" aria-describedby="basic-addon1" minLength={8} onChange={(e)=>{password1(e.target.value)}} />
          </div>      
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text  ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="password" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Repetir Password" aria-label="password" aria-describedby="basic-addon1" minLength={8} onChange={(e)=>{password2(e.target.value)}} />
          </div>      
          <SubmitButton mensage={btnMensage} />   
          <Link to={"/login"} className={`text-center text-decoration-none fs-5 mt-5 pt-4 ${fontPass}`}>¿Ya tenes cuenta?</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm