import React from 'react'
import logoImg from '../../assets/Logo.jpeg';
import starImg from '../../assets/Star.svg';
import styles from './card.module.css';

function Card() {
  const {gameCard, btnStar} = styles;
  return (
  <div className={`card col-md-4 col-lg-2 col-sm-6 mx-1 my-2 ${gameCard}`}>
  <img src={logoImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='row'>
    <h5 className="card-title text-light col-9">Card title</h5>
    <button className={`btn border-0 col-3 ${btnStar}`}><img src={starImg} alt="favorites" /></button>
    </div>
    <p className='text-light'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fuga dolorum odit veniam libero nesciunt adipisci.</p>
  </div>
</div>
  )
}

export default Card