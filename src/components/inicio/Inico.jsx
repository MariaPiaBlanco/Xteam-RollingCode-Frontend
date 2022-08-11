import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import styles from '../inicio/Inicio.module.css'
const Inico = () => {
    const navigate = useNavigate()
    setTimeout(( )=>{
      navigate('/')
    },10500)

  return (
    <div className={`${styles.body}`}>
         <ReactPlayer
       url={require('../../assets/video/Produce.mp4')}
       width='100%'
      height='90%'
      controls
      playing={true}
      muted={true}
      playbackRate = '2'
      />    
    </div>
  )
}

export default Inico