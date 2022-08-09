import React from 'react'
import SubmitButton from '../submitButton/SubmitButton';
import styles  from "./highLightPageComp.module.css"

const HighLightPageComp = ( {gameData} ) => {
  const { title, image, details } = gameData;
  const { imageSize, inputBg, inputBorder } = styles;
  const btnMensage = "Añadir al carrito"

  return (
    <section className="container-fluid">
      <div className="row">
        {image && <img src={image[0]} alt="{title}" className="col-lg-5 rounded-3 m-4 img-fluid" />}
        <div className='col-lg-5 bg-transparent text-center m-4'>
          <h2 className="my-5 display-4">{title}</h2>
          <p>{details}</p>
          <div className="d-flex justify-content-center">
            <div className="w-25">
              <SubmitButton mensage={btnMensage}/>
            </div>
          </div>
        </div>
        {image && <img src={image[1]} alt="" className={`col-lg-5 m-4 ${imageSize}`} />}
        {image && <img src={image[2]} alt="" className={`col-lg-5 m-4 ${imageSize}`} />}
        <div className="col-lg-12 d-flex flex-column align-items-center m-4">
          <h2>Ingresa un comentario</h2>
          <textarea name="" id="" cols="30" rows="10" className={`w-75 rounded-3 ${inputBg} ${inputBorder}`}></textarea>
        </div>
      </div>
    </section>
  )
}

export default HighLightPageComp