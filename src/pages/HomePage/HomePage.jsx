import React from 'react'
import Contact from '../../components/contact/Contact.jsx'
import Carousel from '../../components/carousel/Carousel';
import CardUserFav from '../../components/cardUserFav/CardUserFav';
import Card from '../../components/card/Card';

function HomePage() {
  return (
    <div>
      <Contact/>
      <Carousel/>
      <CardUserFav/>
      <Card/>
    </div>
  )  };


export default HomePage