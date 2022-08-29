import React from "react"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faTwitch, faDiscord} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { footerBgDark, footerBgDarkLight,link_footer, shadow} = styles;
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
              <Link to='/error'><FontAwesomeIcon icon={faTwitch} className={`col-12 fa-2xl`}></FontAwesomeIcon></Link>
              <Link to='/error'><FontAwesomeIcon icon={faDiscord} className={`col-12 fa-2xl`}></FontAwesomeIcon></Link>
              <Link to='/contact'><FontAwesomeIcon icon={faEnvelope} className={`col-12 fa-2xl `}></FontAwesomeIcon></Link>
              <Link to='/error'><FontAwesomeIcon icon={faQuestionCircle} className={`col-12 fa-2xl `}></FontAwesomeIcon></Link>
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