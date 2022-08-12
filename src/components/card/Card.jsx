import React from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../submitButton/SubmitButton";

const Card = ({ game }) => {
  const navigate = useNavigate();
  const {image, title, details, price, _id} = game;
  const { productGame, imgCard, pCard } = styles;
  const btnMensage1 = "Ver detalle del producto";
  const btnMensage2 = "En el carrito";

  return (
    <div className={`card col-lg-3 col-sm-6 mx-1 my-3 py-2 ${productGame}`} onClick={()=>navigate(`/highlightpage/${_id}`)} >
      <img
        src={image[0]}
        className={`card-img-top ${imgCard}`}
        alt={title}
      />
      <div className="card-body">
        <h3 className={`${pCard} text-light`}>
          {title} - ${price}
        </h3>
        <p className={`card-text text-light fs-5`}>{details}</p>
      </div>
      {!game.inCart ? (
      <SubmitButton mensage={btnMensage1} />
          ) : (
          <SubmitButton  mensage={btnMensage2} />
        )}
    </div>
  );
};
export default Card;
