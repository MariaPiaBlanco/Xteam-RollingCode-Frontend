import React, { useState, useEffect } from 'react'
import UpdateGameForm from '../../components/updateGameForm/UpdateGameForm'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { tokenInvalid } from "../../utils/ValidationToken";
import { useNavigate } from 'react-router-dom';


const UpdateGame = () => {
  const { id } = useParams();
  const [title, setTitle] = useState()
  const [details, setDetails] = useState()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()
  const [price, setPrice] = useState()
  const [categorie, setCategorie] = useState()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();

  const updateGame = (e) => {
    e.preventDefault()
    const validation = tokenInvalid();
    if (title === undefined || details === undefined || image1 === undefined || image2 === undefined || image3 === undefined || price === undefined || categorie === undefined){
      alert("Todos los campos son obligatorios")
    } else {
    try {
      axios.put(`http://localhost:8080/games/${id}`, {
        title: title,
        price: price,
        details: details,
        image: [image1, image2, image3],
        categorie: categorie
      }, {
        headers: {
          "access-token": validation.token,
        },
    } )
    navigate("/admin")
    } catch (error) {
      console.log(error)
  }}}

  const getAllCategories = async () => {
    const getCategories = await axios("http://localhost:8080/category")
    setCategories(getCategories.data.category);
  } 
  
  useEffect(() => {
    getAllCategories()
  }, [])
  
  return (
    <div>
      <UpdateGameForm updateGame={updateGame} categories={categories} setCategorie={setCategorie} setTitle={setTitle} setDetails={setDetails} setPrice={setPrice} setImage1={setImage1} setImage2={setImage2} setImage3={setImage3}/>
    </div>
  )
}

export default UpdateGame