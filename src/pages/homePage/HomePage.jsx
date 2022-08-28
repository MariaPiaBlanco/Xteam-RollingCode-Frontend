import React, { useEffect, useState } from 'react'
import Carousel from '../../components/carousel/Carousel.jsx';
import Card from '../../components/card/Card';
import Adds from '../../components/adds/Adds';
import WhoWeAre from '../../components/whoWeAre/WhoWeAre';
import axios from "axios";
import styles from './homePage.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const { gameCard } = styles;

  const [games, setGames] = useState([])
  const navigate = useNavigate()
  
  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response) => setGames(response.data.games))
  }
  useEffect(() => {
    navigate('/')
    getData()
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Carousel />
      <div className="container-fluid">
        <div className={`row justify-content-evenly m-0 ${gameCard}`}>
          {games?.map((game) => (
            <Card game={game} key={game._id} />
          ))}
        </div>
      </div>
      <Adds />
      <WhoWeAre />
    </motion.div>
  );
};


export default HomePage