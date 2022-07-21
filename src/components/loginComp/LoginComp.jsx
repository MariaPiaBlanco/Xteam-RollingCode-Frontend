import React from "react";


function LoginComp() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <form className="col-4 border p-5 d-flex flex-column align-items-center rounded">
          <h2 className="text-white text-center fw-bold display-5 my-5">INICIAR SESION</h2>
          <div className="input-group mb-3  py-2 w-75">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope"></i></span>
            <input type="email" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3 py-2 w-75">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-shield-lock"></i></span>
            <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1"/>
          </div>         
          <button type="submit" className="btn btn-primary w-75 mt-3 mb-5">INGRESAR</button>
        </form>
      </div>
    </div>
  );
}

export default LoginComp;
