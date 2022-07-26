import React from 'react'
import Contact from '../../components/contact/Contact.jsx'
import Carousel from '../../components/Carousel/Carousel';
import CardUserFav from '../../components/CardUserFav/CardUserFav';
import Card from '../../components/Card/Card';

function HomePage() {
  return (
    <div>HomePage
      <Contact/>
      <Carousel/>
      <CardUserFav/>
      <Card/>
    </div>
  )  };


export default HomePage