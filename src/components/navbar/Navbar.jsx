import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logoImg from "../../assets/xteam.png";
import styles from "./navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

function NavScrollExample() {
  const {
    containerNavbarTop,
    navigateLink,
    navigateLinkActive,
    btn_sesion,
  } = styles;

  const navigate = useNavigate();
  const [gamesFor, setGamesFor] = useState([])
  const [gamesFiltered, setGamesFiltered] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const admin = localStorage.getItem("admin")
  const [isLogged, setIsLogged] = useState(false)

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response) => setGamesFor(response.data))
  }
  const verifyLogin = () => {
    let tokenExist = localStorage.getItem("token") ? true : false
    setIsLogged(tokenExist)
  }
  useEffect(() => {
    getData();
    verifyLogin();
  }, [])

  return (
    <Navbar expand="lg" sticky="top" variant="dark" className={`${containerNavbarTop}`}>
      <Container fluid>
        <NavLink className={({ isActive }) => isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"/"}>
          <img src={logoImg} width="110" className="d-inline-block align-top m-1" alt="xTeam" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mb-2">
          <Nav className="justify-content-center me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

            <NavLink className={({ isActive }) => isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"*"} onClick={() => verifyLogin()}>
              Favoritos
            </NavLink>

            <NavLink className={({ isActive }) => isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"/contact"} onClick={() => verifyLogin()}>
              Contacto
            </NavLink>

            <NavLink className={({ isActive }) => isActive ? `${navigateLinkActive}` : `${navigateLink}`} to={"/admin"} onClick={() => verifyLogin()}>
              Administrator
            </NavLink>
          </Nav>

          <Col xs="auto" className="m-2">
            <Form className="d-flex ml-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>

          <Col xs="auto" className="m-2">
            <DropdownButton id="dropdown-item-button m-1" title="Login" align="end">
              <Dropdown.Item as="button">
              {!isLogged && <NavLink as="button" className={`dropdown-item ${btn_sesion}`} to={"/login"} onClick={() => verifyLogin()}>Iniciar sesión</NavLink>}                
              </Dropdown.Item>
              <Dropdown.Item as="button">
              {isLogged && <NavLink as="button" className={`dropdown-item ${btn_sesion}`} to={"/login"} onClick={() => verifyLogin(), localStorage.removeItem("token")}>Cerrar sesión</NavLink>} 
              </Dropdown.Item>
            
            

            </DropdownButton>
          </Col>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;