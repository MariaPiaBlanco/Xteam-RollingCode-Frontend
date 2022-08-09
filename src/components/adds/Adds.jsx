import React from 'react';
import addsImage from '../../assets/images/adds.png';
import styles from './adds.module.css';

const Adds = () => {
    const {addsCode} = styles;
  return (
    <div className="container-fluid col-12 m-0 p-0">
      <a href="https://rollingcodeschool.com" target='_blank'  rel="noreferrer">
      <img className={`col-12 ${addsCode}`} src={addsImage} alt="code"/> 
      </a>
    </div>
  )
}
export default Adds;