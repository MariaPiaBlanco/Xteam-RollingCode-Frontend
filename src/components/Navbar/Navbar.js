import React from "react";
import logoImg from '../../assets/Logo.jpeg';
import searchImg from '../../assets/search.svg';
import cartImg from '../../assets/cart.svg';
import questImg from '../../assets/question.svg';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navXteam">
  <div className="container-fluid d-flex justify-content-between">
    <img className='col-9 col-lg-2 my-1' src={logoImg} alt="Logo" />
    <button className="navbar-toggler me-3 border-0 btn-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="container">
      <div className="collapse navbar-collapse d-flex justify-content-between row" id="navbarScroll">
        <ul className="navbar-nav col-12 col-lg-4 navbar-nav-scroll d-flex">
          <li className="nav-item px-2">
            <a className="nav-link text-light" href="/#">Destacado</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-light" href="/contact">Contacto</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-light" href="/#">Favoritos</a>
          </li>
        </ul>
        <div className="d-flex me-2 col-10 col-lg-4 px-0">
          <input className="form-control inpSearch text-center text-light" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-secondary btnSearch" type="submit"> <img src={searchImg} alt="search" /></button>
          <button className="border-0 mx-2 btnCart"><img src={cartImg} alt='cart'></img></button>
          <button className="border-0 btnQuest"><img src={questImg} alt='quest'></img></button>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
