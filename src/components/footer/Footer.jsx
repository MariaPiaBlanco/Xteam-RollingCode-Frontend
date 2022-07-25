import React from "react"
import Logo from "../../assets/images/xTeamLogo.jpeg";
import styles from "./footer.module.css";

const Footer = () => {
  const { footerBgDark, footerBgDarkLight, inputBorder, inputBg } = styles;
  return (
    <section className="containter-fluid">
      <div className="row">
        <div className={`container-fluid col-12 ${footerBgDark}`}>
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-4 text-center">
              <img src={Logo} alt="xTeamLogo" className="w-50" />
            </div>
            <div className="d-flex flex-column col-12 col-lg-2 align-items-center mt-2">
              <span>Home</span>
              <span>Destacado</span>
              <span>Contacto</span>
              <span>Favortio</span>
            </div>
            <div className="col-4 d-none d-sm-block ">
              <form className="d-flex justify-content-center align-items-center h-100" role="search">
                <div className="input-group mb-3 p-2 w-50">
                  <input autoComplete="off" type="password" className={`form-control ${inputBorder}`} placeholder="Repetir Password" aria-label="password" aria-describedby="basic-addon1"/>
                  <button className={`input-group-text ${inputBorder} ${inputBg}`} id="basic-addon1"><box-icon name="search" color="#ffffff" ></box-icon></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={`col-12 ${footerBgDarkLight} text-center`}>
          <h6 className="pt-2">Copyright © 2022 xTeam - All rights reserved</h6>
        </div>
      </div>
    </section>
  )
}

export default Footer