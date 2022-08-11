import React from "react";
import logoImg from "../../assets/xteam.png";
import cartImg from "../../assets/cart.svg";
import userImg from "../../assets/images/user.svg";
import Search from "../search/Search.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar2.module.css";

const NavbarCustom = () => {
  const {navXteam, navigateLink, navigateLinkActive, containerNavbarTop, logoTopImg, btn_user, btn_cart, btn_cart_img, menu_hambur } = styles;
  const navigate = useNavigate();
  return (
      <nav className={`sticky-top navbar navbar-expand-lg ${containerNavbarTop} ${navXteam}`}>
        <div className="container-fluid">
          <img onClick={() => navigate("/", { replace: true })}
          className={`col-9 col-lg-2 m-1 ${logoTopImg}`}
          src={logoImg}
          alt="Xteam" />
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
          <div className={`collapse navbar-collapse ${menu_hambur}`} id="navbarNavDropdown">
            <ul className="navbar-nav d-flex d-inline-flex justify-content-between align-items-center my-2 p-2">
              <li className="nav-item px-3">
              <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"/highlightpage"}
                >
                  INICIO
                </NavLink>
              </li>
              <li className="nav-item px-3">
              <NavLink className={({ isActive }) =>
                  isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to="/contact">
                  CONTACTO
                </NavLink>
              </li>
              <li className="nav-item px-3">
              <NavLink className={({ isActive }) =>
                  isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to="">
                  FAVORITOS
                </NavLink>
              </li>
              <li className="nav-item px-3 dropdown">
                <NavLink
                  className={({ isActive }) =>
                  isActive ? `nav-link dropdown-toggle ${navigateLinkActive}` : `${navigateLink}`
                } to=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIAS
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className={({ isActive }) =>
                  isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                } to="">
                      Accion
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                      Aventura
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                      De rol
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                      Simulacion
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                      Estrategia
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                         Deportes y carreras
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                      isActive ? `dropdown-item ${navigateLinkActive}` : `${navigateLink}`
                      } to="">
                        Tematicas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Search />
              </li>
              <li className="nav-item">
                <button className={btn_cart}>
                  <img className={btn_cart_img} src={cartImg} alt="cart" />
                </button>
              </li>
              <li className="nav-item dropdown">
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default NavbarCustom;
