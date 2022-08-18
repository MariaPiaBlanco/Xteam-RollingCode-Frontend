import React from 'react'
import styles from '../loader/Loader.module.css'
import logo from '../../assets/images/Logo.png'
const Loader = () => {
  return (
    <div>
        <div className={`text-center ${styles.loader}`}>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <h1>Cargando página</h1>
        <img src={logo} alt="xteam" />
        </div>
    </div>
  )
}

export default Loader