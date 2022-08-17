import React, { useEffect, useState } from "react";
import logoImg from "../../assets/xteam.png";
import searchImg from "../../assets/search.svg";
import styles from "./navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
    logoTopImg,
    buttonIcon,
    btn_sesion,
    fieldInputSearch,
    menuUser,
    menuUserShow,
    containerNavbarLogo,
    containerListItems,
  } = styles;
  const navigate = useNavigate();
  const [gamesFor, setGamesFor] = useState([])
  const [gamesFiltered, setGamesFiltered] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const admin = localStorage.getItem("admin")

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response) => setGamesFor(response.data))
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-light ${containerNavbarTop} ${navXteam}`}>
        <div className="container-fluid d-flex justify-content-between">
          <div className={`px-2 ${containerNavbarLogo}`}>
            <img
              onClick={() => navigate("/", { replace: true })}
              className={`col-9 col-lg-2 m-1 ${logoTopImg}`}
              src={logoImg}
              alt="Xteam"
            />
          </div>
          <div
            className="collapse navbar-collapse d-flex justify-content-between row"
            id="navbarScroll"
          >
            <ul className={`navbar-nav col-12 col-lg-4 navbar-nav-scroll d-flex list-inline ${containerListItems}`}>
              <li className="nav-item px-2 list-inline">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"/"}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item px-2 list-inline">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"*"}
                >
                  Favoritos
                </NavLink>
              </li>
              <li className="nav-item px-2 list-inline">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </li>
              <li className={`nav-item px-2 list-inline ${!admin && "d-none"}`}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"/admin"}
                  onClick={() => { localStorage.removeItem("admin") }}
                >
                  Administrador
                </NavLink>
              </li>
            </ul>
            <div className="d-flex me-2 col-12 col-lg-4 px-0">
              <input
                className={`form-control text-light ${fieldInputSearch} ${inpSearch}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchFilter}
                onChange={(e) => {
                  const inputUser = e.target.value.trim().toLowerCase()
                  setSearchFilter(inputUser)
                  searchFilter !== '' ?
                    setGamesFiltered([...gamesFor.filter(game => game.title.toLowerCase().includes(inputUser))]) :
                    setGamesFiltered([])
                }}
              />
              <button
                className={`btn btn-outline-secondary ${fieldInputSearch} ${btnSearch}`}
                type="submit"
              >
                {" "}
                <img src={searchImg} alt="search" />
              </button>
              <div>
                <button className={`border-0 mx-2 ${btnCart} ${buttonIcon}`}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"*"}
                >
                  <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                </NavLink>
                </button>
                <button className={`border-0 ${btnQuest} ${buttonIcon}`}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                  }
                  to={"*"}
                >
                  <FontAwesomeIcon icon={faCircleQuestion} ></FontAwesomeIcon>
                </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className={`btn btn-secondary dropdown-toggle ${menuUser}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
            </button>
            <ul className={`dropdown-menu ${menuUserShow}`}>
              <li><Link className={`dropdown-item text-white ${btn_sesion}`} to={"/login"}>Iniciar sesion</Link></li>
              <li><Link className={`dropdown-item text-white ${btn_sesion}`} to={"/login"} onClick={() => localStorage.removeitem("token")}>Cerrar sesion</Link></li>
            </ul>
          </div>
        </div>
        <section className="list results_search">
          <ol>
            {searchFilter !== '' && gamesFiltered?.map(game => <li key={game._id}> <Link to={`/highlightpage/${game._id}`}
              onClick={() => {
                setSearchFilter('')
                setGamesFiltered([])
              }}
              className="textResult"> {game.title} </Link></li>)}
          </ol>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
