import React from 'react';
import gImage from '../../assets/images/gaston_avila.jpeg';
import aImage from '../../assets/images/ale_vexler.jpeg';
import mImage from '../../assets/images/marcelo.jpeg';
import fImage from '../../assets/images/flavia_medina.jpeg';
import pImage from '../../assets/images/pia_blanco.jpeg';
import styles from './whoWeAre.module.css';

const WhoWeAre = () => {
  const { image_WhoWeAre, card_WhoWeAre, image_WhoWeAre_two, profileCard, profileContent, } = styles;
  return (
    <div className={`container fluid`}>
      <div className='container'>
        <div className="container">
          <div className="row">

            <div className="col-md-4 col-sm-6">
              <div className={`${profileCard}`}>
                <img src={fImage} className={`img-fluid`} alt="whoWeAre" />
                <div className={`${profileContent}`}>
                  <h4>Flavia Medina</h4>
                  <p>Apasionada por los datos y la investigacion. Me enfoque mas en el backend y equilibre un poco en el front. Me gusto trabajar con el equipo y vivir esta gran aventura.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className={`${profileCard}`}>
                <img src={pImage} className={`img-fluid`} alt="whoWeAre" />
                <div className={`${profileContent}`}>
                  <h4>Pia Blanco</h4>
                  <p>Estudiante de Artes plasticas explorando el mundo de la programacion. Interesada en combinar ambos mundos y seguir avanzando.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className={`${profileCard}`}>
                <img src={gImage} className={`img-fluid`} alt="whoWeAre" />
                <div className={`${profileContent}`}>
                  <h4>Gaston Avila</h4>
                  <p>Programador autodidacta y amante de los catos. Gran manejo de herramientas de desarrollo, gestión de equipos y liderazgo.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className="container">
          <div className="row">

            <div className="col-md-4 col-sm-6">
              <div className={`${profileCard}`}>
                <img src={aImage} className={`img-fluid`} alt="whoWeAre" />
                <div className={`${profileContent}`}>
                  <h4>Alejandro Vexler</h4>
                  <p>Desarrollador fullStack (Stack MERN), tutor en Rolling Code School, apasionado por la tecnologia y la gastronomia.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className={`${profileCard}`}>
                <img src={mImage} className={`img-fluid`} alt="whoWeAre" />
                <div className={`${profileContent}`}>
                  <h4>Marcelo Sánchez</h4>
                  <p>Experto en la implementación de UI y CSS Specialist en la plataforma de low-code OutSystems, poseo alto conocimiento en maquetación web y diseño UI.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre