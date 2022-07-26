import React from 'react';
import './CardUserFav.css';
import user from '../../assets/user.svg';
import fullStar from '../../assets/fullStar.svg'
import incompleteStar from '../../assets/incompleteStar.svg';

const CardUserFav = () => {
  return (
    <div className='container barUserFav'>
        <div className="card userFav col-lg-3 col-md-4 col-sm-6 mx-2">
            <div className="card-body">
                <div className=''>
                    <button className='btn col-3 border-0 btnUser'><img className='userImg' src={user} alt="user" /></button>
                    <button className='btn col-7 border-0 btnFullStar '><img src={fullStar} alt="qualification" /><img src={fullStar} alt="qualification" /><img src={fullStar} alt="qualification" /><img src={fullStar} alt="qualification" /></button>
                    <button className='btn col-1 border-0 btnIncStar ps-0 ms-0'><img src={incompleteStar} alt="qualification" /></button>
                </div>
                <h5 className="card-title text-light mt-3">Card title</h5>
                <p className="card-text text-center text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}

export default CardUserFav