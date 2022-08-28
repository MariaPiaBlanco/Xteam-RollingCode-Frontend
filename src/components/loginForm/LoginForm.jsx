import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import SubmitButton from '../submitButton/SubmitButton';
import styles from "./loginForm.module.css"

const LoginForm = ({ handleLogin, email, password }) => {
  const { bgLogin, border, inputBorder, inputBg, iconInputBg, fontLogin, fontPass } = styles;
  const btnMensage = "Ingresar"  

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 }}
    className={`container-fluid`}>
      <div className=" row justify-content-center align-items-center vh-100" >
        <form className={`col-10 col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xxl-2 py-5 px-3 rounded ${bgLogin} ${border} d-flex flex-column align-items-center`} onSubmit={handleLogin} >
          <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>INICIAR SESION</h2>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="email" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="email" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>email(e.target.value)}/>
          </div>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text  ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="password" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="password" aria-label="password" aria-describedby="basic-addon1" onChange={(e)=>password(e.target.value)} />
          </div>      
          <SubmitButton mensage={btnMensage} />  
          <Link to={"/register"} className={`text-center text-decoration-none mt-5 pt-4 ${fontPass}`}>¿No estas registrado?</Link> 
          <Link to={"/recoverPass"} className={`text-center text-decoration-none ${fontPass}`}>¿Olvidaste tu contraseña?</Link> 
        </form>
      </div>
    </motion.div>
  );
}

export default LoginForm