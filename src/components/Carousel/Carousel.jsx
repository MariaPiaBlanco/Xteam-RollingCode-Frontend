import React from "react";
import logoImg from '../../assets/Logo.jpeg';
import styles from './carousel.module.css';

function Carousel() {
  const {btnCarousel, barCarousel} = styles;
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logoImg} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block col-3 ms-0 ps-0">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ducimus nihil labore nisi id provident doloremque esse debitis porro ut impedit et at est similique, aperiam sunt error exercitationem eos!</p>
            <button type="button" className= {`btn btn-lg text-light ${btnCarousel}`}>Primary button</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={logoImg} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={logoImg} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      </button>
      <div className={`text-light ${barCarousel}`}><h1>Titulo</h1> <h2>Subtitulo</h2></div>
</div>
  );
}

export default Carousel;
