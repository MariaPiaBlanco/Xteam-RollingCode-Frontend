import React from "react";
// import CartContext from "../../context/CartContext";
import styles from "./card.module.css";

const Card =({game})=>{
  const {image, title, details, price} = game
  const { productGame, imgCard, pCard, btnCart } = styles;
  return (
          <div className={`card col-2 mx-2 my-3 py-2 ${productGame}`}>
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
            <button
                className={`${btnCart} btn btn-primary`}
              >
                Agregar al carrito
              </button>
               ) : (
                <button className={`${btnCart} btn btn-primary`}>En el carrito</button>
              )}
          </div>
  );
};
export default Card;