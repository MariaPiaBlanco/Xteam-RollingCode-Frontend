import React, {useEffect, useState }from 'react'
import Carousel from '../../components/carousel/Carousel';
import CardUserFav from '../../components/cardUserFav/CardUserFav';
import Card from '../../components/card/Card';
import axios from "axios";
import styles from './homePage.module.css';

function HomePage() {
  const {gameCard} = styles;

  const [games, setGames] = useState([])
  const getData = async () =>{ 
    await axios.get(`https://xteamrolling.herokuapp.com/games`)
      .then((response)=>setGames(response.data))
  } 
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Carousel/>
      <CardUserFav/>
      <div className='container-fluid'>
        <div className={`row justify-content-evenly m-0 ${gameCard}`}>
          {games?.map(game=><Card game={game} key={game._id}/>)}
        </div>
      </div>
    </div>
  )  };


export default HomePage