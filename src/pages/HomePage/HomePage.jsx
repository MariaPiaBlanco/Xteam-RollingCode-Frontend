import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import CardUserFav from '../../components/CardUserFav/CardUserFav';
import Card from '../../components/Card/Card';

function HomePage() {
  return (
    <div>
      <Carousel/>
      <CardUserFav/>
      <Card/>
    </div>
  )  };


export default HomePage