import React from "react";
import logoImg from "../../assets/xteam.png";
import searchImg from "../../assets/search.svg";
import styles from "./navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const {
    navXteam,
    inpSearch,
    btnSearch,
    btnCart,
    btnQuest,
    navigateLink,
    navigateLinkActive,
    containerNavbarTop,
  } = styles;
  const navigate = useNavigate();
  return (
    <nav className={`sticky-top navbar navbar-expand-lg ${containerNavbarTop} ${navXteam}`}>
      <div className="container-fluid d-flex justify-content-between">
        <img
          onClick={() => navigate("/", { replace: true })}
          className="col-9 col-lg-2 m-1 logo-img"
          src={logoImg}
          alt="Xteam"
        />
        <button
          className="navbar-toggler me-3 border-0 btn-burger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container container_navbar--items">
          <div
            className="collapse navbar-collapse d-flex justify-content-between row"
            id="navbarScroll"
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
                <NavLink className={({ isActive }) =>
                  isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to="/contact">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className={({ isActive }) =>
                  isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to={"/Favorites"}>
                  Favoritos
                </NavLink>
              </li>
            </ul>
            <div className="d-flex me-2 col-10 col-lg-4 px-0">
              <input
                className={`form-control text-center text-light field__input-search ${inpSearch}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-secondary field__input-search-icon ${btnSearch}`}
                type="submit"
              >
                {" "}
                <img src={searchImg} alt="search" />
              </button>
              <button className={`border-0 mx-2 button-icon ${btnCart}`}>
                <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
              </button>
              <button className={`border-0 button-icon ${btnQuest}`}>
                <FontAwesomeIcon icon={faCircleQuestion} ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
