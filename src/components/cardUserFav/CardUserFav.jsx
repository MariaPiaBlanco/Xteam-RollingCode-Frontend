import React from 'react';
import user from '../../assets/user.svg';
import fullStar from '../../assets/fullStar.svg'
import incompleteStar from '../../assets/incompleteStar.svg';
import styles from './cardUserFav.module.css';

const CardUserFav = () => {
  const {barUserFav, userFav, userImg, btnFullStar, btnIncStar}  = styles;
  return (
    <div className={`container ${barUserFav}`}>
        <div className={`card col-lg-3 col-md-4 col-sm-6 mx-2 ${userFav}`}>
            <div className="card-body">
                <div className=''>
                    <button className='btn col-3 border-0 btnUser'><img className={`${userImg}`} src={user} alt="user" /></button>
                    <button className={`btn col-7 border-0 ${btnFullStar}`}><img src={fullStar} alt="qualification" /><img src={fullStar} alt="qualification" /><img src={fullStar} alt="qualification" /><img src={fullStar} alt="qualification" /></button>
                    <button className={`btn col-1 border-0 ps-0 ms-0 ${btnIncStar}`}><img src={incompleteStar} alt="qualification" /></button>
                </div>
                <h4 className="card-title text-light mt-3">Card title</h4>
                <p className="card-text text-center text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}

export default CardUserFav