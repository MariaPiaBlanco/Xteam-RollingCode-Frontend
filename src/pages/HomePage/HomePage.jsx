import React, {useEffect, useState }from 'react'
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import CardUserFav from '../../components/CardUserFav/CardUserFav'
import axios from "axios";
import styles from './homePage.module.css';

function HomePage() {
  const {gameCard} = styles;

  const [games, setGames] = useState([])
  const getData = async () =>{ 
    await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response)=>setGames(response.data))
  } 
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Carousel/>
      <CardUserFav></CardUserFav>
      <div className='container-fluid'>
        <div className={`row justify-content-evenly m-0 ${gameCard}`}>
          {games?.map(game=><Card game={game} key={game._id}/>)}
        </div>
      </div>
    </div>
  )  };


export default HomePage