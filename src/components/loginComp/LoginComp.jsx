import React from "react";
import styles from "./loginComp.module.css"


function LoginComp() {
  return (
    <div className={`container-fluid ${styles.bgLogin}`}>
      <div className="row justify-content-center align-items-center vh-100">
        <form className={`col-4 p-5 d-flex flex-column align-items-center rounded ${styles.border}`}>
          <h2 className="text-white text-center fw-bold display-5 my-5">INICIAR SESION</h2>
          <div className="input-group mb-3  py-2 w-75">
            <span className="input-group-text" id="basic-addon1"><box-icon name='envelope'></box-icon></span>
            <input type="email" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3 py-2 w-75">
            <span className="input-group-text" id="basic-addon1"><box-icon name='lock' ></box-icon></span>
            <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1"/>
          </div>         
          <button type="submit" className="btn w-75 text-white">INGRESAR</button>
        </form>
      </div>
    </div>
  );
}

export default LoginComp;
