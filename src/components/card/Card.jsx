import React from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../submitButton/SubmitButton";

const Card = ({ game }) => {
  const navigate = useNavigate();
  const { image, title, details, price, _id } = game;
  const { productGame, imgCard, pCard, gameDetails } = styles;
  const btnMensage1 = "Ver detalle del producto";
  const btnMensage2 = "En el carrito";
  const imageDefault = 'https://i.gifer.com/ZjtR.gif'
  return (
    <div className={`card col-lg-3 col-sm-6 mx-1 my-3 py-2 ${productGame}`} onClick={() => navigate(`/highlightpage/${_id}`)} >
      <img
        src={image? image[0] : imageDefault}
        // src={imageDefault}
        className={`card-img-top ${imgCard}`}
        alt={title}
      />
      <div className="card-body">
        <h4 className={`${pCard} text-light`}>
          {title}
        </h4>
        <h5 className={`${pCard} text-light`}>
          ${price}
        </h5>

        <p className={`card-text text-light fs-6 mt-1 ${gameDetails}`}>{details}</p>
      </div>

      <div className={`card-text text-light fs-6 mt-1 mb-2 text-center `}>
        {!game.inCart ? (
          <SubmitButton mensage={btnMensage1} />
        ) : (
          <SubmitButton mensage={btnMensage2} />
        )}
      </div>
    </div>
  );
};
export default Card;
