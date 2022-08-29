import React from 'react';
import styles from './errorPage.module.css';
import imgAstronaut from "../../assets/images/astronaut.svg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const ErrorPage = () => {
    const {
        bgErrorPage,
        textCenter,
        primaryButton,
        imgAstronautAnimation,
        boxAstronaut,
    } = styles;
    return (
      <motion.div
        initial={{ opacity: 0.5}}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`${bgErrorPage}`}
      >
        <div className={`${boxAstronaut}`}>
          <img
            className={`${imgAstronautAnimation}`}
            src={imgAstronaut}
            alt="404"
            width="140px"
          />
        </div>
        <div className={`${textCenter}`}>
          <h1>Error!</h1>
          <h4>Pagina no encontrada</h4>
          <motion.div
            initial={{ y: -10, scale: 0 }}
            animate={{ y: 40, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/" className={`${primaryButton}`}>
              Volver a Inicio{" "}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
}

export default ErrorPage