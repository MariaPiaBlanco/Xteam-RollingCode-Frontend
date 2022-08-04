import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HighLightPageComp from '../../components/highLightPageComp/HighLightPageComp';

const HighLightPage = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState({})

  const getGameById = async (gameId) => {
    try {
      const {data} = await axios(`${process.env.REACT_APP_URL_BASE}/games/${gameId}`)
      setGameData(data);
    } catch (error) {
      alert(error)
    }
  };
  console.log(gameData);
  useEffect(() => {
    getGameById(id)
},[id])
  
  return (
    <HighLightPageComp gameData={gameData} />
  )
}

export default HighLightPage