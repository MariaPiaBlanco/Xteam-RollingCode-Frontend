import React from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../submitButton/SubmitButton";

const Card = ({ game }) => {
  const navigate = useNavigate();
  const {image, title, details, price, _id} = game;
  const { productGame, imgCard, pCard } = styles;
  const btnMensage1 = "Agregar al carrito";
  const btnMensage2 = "En el carrito";

  return (
    <div className={`card col-lg-2 col-sm-6 mx-2 my-3 py-2 ${productGame}`} onClick={()=>navigate(`/highlightpage/${_id}`)} >
      <img
        src={image[0]}
        className={`card-img-top my-2 ${imgCard}`}
        alt={title}
      />
      <div className="card-body">
        <h5 className={`${pCard} text-light`}>
          {title} - ${price}
        </h5>
        <p className={`card-text text-light`}>{details}</p>
      </div>
      {!game.inCart ? (
      <SubmitButton mensage={btnMensage1} />
          ) : (
          <SubmitButton mensage={btnMensage2} />
        )}
    </div>
  );
};
export default Card;
