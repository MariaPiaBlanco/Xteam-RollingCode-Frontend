import React, { useEffect, useState } from "react";
import logoImg from "../../assets/xteam.png";
import searchImg from "../../assets/search.svg";
import styles from "./navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCartShopping, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
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
    fieldInputSearch,
    menuUser,
    menuUserShow,
  } = styles;
  const navigate = useNavigate();
  const [gamesFor, setGamesFor] = useState([])
  const [gamesFiltered, setGamesFiltered] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const getData = async () =>{ 
    await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response)=>setGamesFor(response.data))
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <nav className={`sticky-top navbar navbar-expand-lg d-flex flex-column ${containerNavbarTop} ${navXteam}`}>
      <div className="container-fluid d-flex justify-content-between">
        <img
          onClick={() => navigate("/", { replace: true })}
          className={`col-9 col-lg-2 m-1 ${logoTopImg}`}
          src={logoImg}
          alt="Xteam"
        />
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
            </ul>
            <div className="d-flex me-2 col-10 col-lg-4 px-0">
              <input
                className={`form-control text-light ${fieldInputSearch} ${inpSearch}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchFilter}
                onChange={(e)=> {
                  const inputUser = e.target.value.trim().toLowerCase()
                  setSearchFilter(inputUser)
                  searchFilter !== ''?  
                  setGamesFiltered( [...gamesFor.filter( game => game.title.toLowerCase().includes(inputUser))] ):
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
              <button className={`border-0 mx-2 ${btnCart} ${buttonIcon}`}>
                <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
              </button>
              <button className={`border-0 ${btnQuest} ${buttonIcon}`}>
                <FontAwesomeIcon icon={faCircleQuestion} ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className={`btn btn-secondary dropdown-toggle ${menuUser}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
          </button>
          <ul className={`dropdown-menu ${menuUserShow}`}>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action two</a></li>
            <li><a className="dropdown-item" href="#">Action three</a></li>
          </ul>
        </div>
      </div>
      <section className="list results_search">
        <ol>
          {searchFilter !== '' && gamesFiltered?.map( game =>  <li key={game._id}> <Link to={`/highlightpage/${game._id}`} 
          onClick={()=>{
            setSearchFilter('')
            setGamesFiltered([])
            }}
              className="textResult"> {game.title} </Link></li>)}
        </ol>
      </section>


    </nav>
  );
};

export default Navbar;
