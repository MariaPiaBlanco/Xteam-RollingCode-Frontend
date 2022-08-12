import React from 'react';
import styles from './errorPage.module.css';
import imgAstronaut from "../../assets/images/astronaut.svg";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const {
        bgErrorPage,
        textCenter,
        primaryButton,
        imgAstronautAnimation,
        boxAstronaut,
    } = styles;
    return (
        <div className={`${bgErrorPage}`}>
            <div className={`${boxAstronaut}`}>
                <img className={`${imgAstronautAnimation}`}
                    src={imgAstronaut}
                    alt="404"
                    width="140px"
                />
            </div>
            <div className={`${textCenter}`}>
                <h1>Error!</h1>
                <h4>Pagina no encontrada</h4>
                <Link to="/" className={`${primaryButton}`}>Volver a Inicio </Link>
            </div>
        </div>
    )
}

export default ErrorPage