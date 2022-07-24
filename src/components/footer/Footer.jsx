import React from 'react'
import Logo from "../../assets/images/xTeamLogo.jpeg";

const Footer = () => {
  return (
    <section className="container-fluid">
      <div className="row justify-content-around">
        <div className='col-4'>
          <img src={Logo} alt="xTeamLogo" className='w-50' />
        </div>
        <div className='d-flex flex-column col-2'>
          <span>Home</span>
          <span>Destacado</span>
          <span>Contacto</span>
          <span>Favortio</span>
        </div>
        <div className='col-4'>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Footer