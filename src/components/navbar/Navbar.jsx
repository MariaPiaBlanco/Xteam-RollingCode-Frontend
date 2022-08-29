import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logoImg from "../../assets/xteam.png";
import styles from "./navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { motion } from 'framer-motion';
import { tokenInvalid } from '../../utils/ValidationToken';

function NavbarCustom() {
  const {
    containerNavbarTop,
    navigateLink,
    navigateLinkActive,
    btn_sesion,
    searchInput,
    searchBox,
    navContainer,
    results,
    result,
    btnUser,
  } = styles;

  const navigate = useNavigate();
  const [gamesFor, setGamesFor] = useState([])
  const [gamesFiltered, setGamesFiltered] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const [isLogged, setIsLogged] = useState(false)
  const [adminProfile, setAdminProfile] = useState(false)

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response) => {
        setGamesFor(response.data.games)
      })
  }
  const verifyLogin = () => {
    const token = tokenInvalid()
    // let tokenExist = localStorage.getItem("token") ? true : false
    setIsLogged(!token.invalidToken)
    setAdminProfile((token.decode?.admin)? true : false)
  }
  useEffect(() => {
    getData();
    verifyLogin();
  }, [])

  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      className={`${containerNavbarTop} ${navContainer}`}
    >
      <Container fluid>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${navigateLinkActive}` : `${navigateLink}`
          }
          to={"/"}
        >
          <img
            src={logoImg}
            width="110"
            className="d-inline-block align-top m-1"
            alt="xTeam"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mb-2">
          <Nav
            className="justify-content-center me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? `${navigateLinkActive}` : `${navigateLink}`
              }
              to={"*"}
              onClick={() => verifyLogin()}
            >
              Favoritos
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? `${navigateLinkActive}` : `${navigateLink}`
              }
              to={"/contact"}
              onClick={() => verifyLogin()}
            >
              Contacto
            </NavLink>

            { (isLogged && adminProfile) && <NavLink
              className={({ isActive }) =>
                isActive ? `${navigateLinkActive}` : `${navigateLink}`
              }
              to={"/admin"}
              onClick={() => verifyLogin()}
            >
              Administrador
            </NavLink>}
          </Nav>

          <Col xs="auto" className="m-2">
            <div className={searchBox}>
              <input
                className={searchInput}
                type="text"
                placeholder="Buscar"
                value={searchFilter}
                onChange={(e) => {
                  const userInput = e.target.value.toLowerCase().trim();
                  setSearchFilter(userInput);
                  const games = [...gamesFor];
                  const filter = [
                    ...games.filter((game) =>
                      game.title.toLowerCase().trim().includes(userInput)
                    ),
                  ];
                  setGamesFiltered(userInput !== "" ? [...filter] : []);
                }}
              />
              <box-icon name="search" color="#ffffff"></box-icon>
            </div>
          </Col>

          <Col xs="auto" className="m-2">
            <DropdownButton 
              id="dropdown-item-button m-1"
              title="👾"
              align="end"
              menuVariant="dark"
              key="Secondary"
              className={btnUser}
            >
              {!isLogged && (
                <Dropdown.Item
                  as="button"
                  className={`dropdown-item ${btn_sesion}`}
                  onClick={() => {
                    verifyLogin();
                    navigate("/login", { replace: true });
                  }}
                >
                  Iniciar sesión
                </Dropdown.Item>
              )}

              {isLogged && (
                <Dropdown.Item
                  as="button"
                  className={`dropdown-item ${btn_sesion}`}
                  onClick={() => {
                    localStorage.removeItem("token");
                    verifyLogin();
                    navigate("/", { replace: true });
                  }}
                >
                  Cerrar sesión
                </Dropdown.Item>
              )}
            </DropdownButton>
          </Col>
          <Col xs="auto" className="m-2">
                <button className='btn btn-dark' onClick={()=>navigate("/error")}>
                <box-icon name='cart' color='#ffffff' ></box-icon>
                </button>
          </Col>
        </Navbar.Collapse>
      </Container>
      {gamesFiltered && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className={results}
        >
          {gamesFiltered.map((game) => {
            return (
              <p
                className={`${result}`}
                onClick={() => {
                  setSearchFilter("");
                  setGamesFiltered([]);
                  navigate(`/highlightpage/${game._id}`);
                }}
                key={game._id}
              >
                {game.title}
              </p>
            );
          })}
        </motion.div>
      )}
    </Navbar>
  );
}

export {NavbarCustom};