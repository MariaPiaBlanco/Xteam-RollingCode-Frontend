import React from 'react';
import gImage from '../../assets/images/gaston_avila.jpeg';
import aImage from '../../assets/images/ale_vexler.jpeg';
import mImage from '../../assets/images/marcelo.jpeg';
import fImage from '../../assets/images/flavia_medina.jpeg';
import pImage from '../../assets/images/pia_blanco.jpeg';
import styles from './whoWeAre.module.css';

const WhoWeAre = () => {
    const {image_WhoWeAre, card_WhoWeAre, image_WhoWeAre_two} = styles;
  return (
    <div className={`container fluid`}>
    <div className='row flex-wrap gap-3 my-2 mx-1 d-flex justify-content-evenly'>
      <div className={`card mb-3 col-lg-4 col-sm-5 ${card_WhoWeAre}`}>
        <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
            <img src={fImage} className={`img-fluid ${image_WhoWeAre}`} alt="whoWeAre"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light">Flavia Medina</h5>
              <p className="card-text fs-5">Apasionada por los datos y la investigacion.
                Me enfoque mas en el backend y equilibre un poco en el front.
                Me gusto trabajar con el equipo y vivir esta gran aventura.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`card mb-3 col-lg-4 col-sm-5 ${card_WhoWeAre}`}>
        <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
            <img src={pImage} className={`img-fluid ${image_WhoWeAre}`} alt="whoWeAre"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light">Pia Blanco</h5>
              <p className="card-text fs-5">Estudiante de Artes plasticas explorando el mundo de la programacion.
                Interesada en combinar ambos mundos y seguir avanzando. </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`card mb-3 col-lg-4 col-sm-5 ${card_WhoWeAre}`}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img src={gImage} className={`img-fluid ${image_WhoWeAre_two}`} alt="whoWeAre"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light">Gaston Avila</h5>
              <p className="card-text fs-5">Programador autodidacta y amante de los catos. Gran manejo de herramientas de desarrollo, gestión de equipos y liderazgo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`card mb-3 col-lg-4 col-sm-5 ${card_WhoWeAre}`}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img src={aImage} className={`img-fluid ${image_WhoWeAre_two}`} alt="whoWeAre"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light">Alejandro Vexler</h5>
              <p className="card-text fs-5">Desarrollador fullStack (Stack MERN), tutor en Rolling Code School, apasionado por la tecnologia y la gastronomia.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`card mb-3 col-lg-4 col-sm-5 ${card_WhoWeAre}`}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img src={mImage} className={`img-fluid ${image_WhoWeAre}`} alt="whoWeAre"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light"> Marcelo Sanchez</h5>
              <p className="card-text fs-5">Experto en la implementación de UI y CSS Specialist en la plataforma de low-code OutSystems, poseo alto conocimiento en maquetación web y diseño UI.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhoWeAre