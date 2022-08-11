import React from "react";
import cartImg from "../../assets/cart.svg";
import userImg from "../../assets/images/user.svg";
import logoImg from "../../assets/xteam.png";
import { Search } from "../../components/search/Search.jsx";
import styles from "./navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCartShopping, faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const {
    navXteam,
    btnCart,
    btnQuest,
    navigateLink,
    navigateLinkActive,
    containerNavbarTop,
    logoTopImg,
    buttonIcon,
    menu_hambur,
    btn_user,
    btn_cart,
    btn_cart_img,
  } = styles;
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className={`sticky-top navbar navbar-expand-lg col-12 ${containerNavbarTop} ${navXteam}`}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div>

      
          <img
            onClick={() => navigate("/", { replace: true })}
            className={`col-9 col-lg-2 m-1 ${logoTopImg}`}
            src={logoImg}
            alt="Xteam"
          />
          <button
            className={`navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${menu_hambur}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav col-12 col-lg-4 navbar-nav-scroll d-flex">
              <li className="nav-item px-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"/highlightpage"}
                >
                  Destacado
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"/Favorites"}
                >
                  Favoritos
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" href="/#">Accion</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">Aventura</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">De rol</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">Simulacion</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">Estrategia</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">Deportes y carreras</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">Tematicas</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/#">Asistencia al jugador</NavLink></li>
                </ul>
              </li> */}
            </ul>
            </div>
            <div className="d-flex me-2 col-10 col-lg-8 px-0">
              <Search />
              <button className={btn_cart}>
                <img className={btn_cart_img} src={cartImg} alt="cart" />
              </button>
              {/* <button className="nav-item dropdown"> */}
                <img
                  className={`nav-link dropdown-toggle ${btn_user}`}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  src={userImg}
                  alt="user"
                />
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                       Iniciar sesion
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                         Cerrar sesion
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                         Administrador
                    </NavLink>
                  </li>
                </ul>
              <button className={`border-0 mx-2 ${btnCart} ${buttonIcon}`}>
                <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
              </button>
              <button className={`border-0 ${btnQuest} ${buttonIcon}`}>
                <FontAwesomeIcon icon={faCircleQuestion} ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
