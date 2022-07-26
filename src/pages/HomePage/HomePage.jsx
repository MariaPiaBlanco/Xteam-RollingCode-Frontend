import React from 'react'
import Carousel from '../../components/carousel/Carousel';
import CardUserFav from '../../components/cardUserFav/CardUserFav';
import Card from '../../components/card/Card';

function HomePage() {
  return (
    <div>
      <Carousel/>
      <CardUserFav/>
      <Card/>
    </div>
  )  };


export default HomePage