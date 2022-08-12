import React from "react"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import styles from "./footer.module.css";

const Footer = () => {
  const { footerBgDark, footerBgDarkLight, inputBorder, inputBg, iconInputBg, link_footer, shadow} = styles;
  return (
    <section className="containter-fluid">
      <div className="row m-0">
        <div className={`container-fluid col-12 ${footerBgDark}`}>
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-4 text-center">
             <Link to='/' className={`text-decoration-none ${shadow} m-5 p-5`}><img src={Logo} alt="xTeamLogo" className={`w-50`} /></Link>      
            </div>
            <div className="d-flex flex-column col-12 col-lg-2 align-items-center mt-2">
              <Link className={link_footer} to="/">Inicio</Link>
              <Link className={link_footer} to="/contact">Contacto</Link>
              <Link className={link_footer} to="/error">Favorito</Link>
            </div>
            <div className="col-4 d-none d-sm-block ">
              <form className="d-flex justify-content-center align-items-center h-100" role="search">
                <div className="input-group mb-3 p-2 w-50">
                  <input autoComplete="off" type="text" className={`form-control ${inputBorder} ${inputBg}`} placeholder="Busqueda" aria-label="password" aria-describedby="basic-addon1"/>
                  <button className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="search" color="#ffffff" ></box-icon></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={`col-12 ${footerBgDarkLight} text-center`}>
          <h6 className="pt-2">Copyright © 2022 xTeam - Todos los derechos reservados</h6>
        </div>
      </div>
    </section>
  )
}

export default Footer