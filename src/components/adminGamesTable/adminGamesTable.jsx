import axios from 'axios'
import React from 'react'
import SubmitButton from '../submitButton/SubmitButton'
import { useNavigate } from "react-router-dom";

const AdminGamesTable = ({game}) => {
  const { title, details, _id, price, image, fav } = game;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const deleteGame = async () => {
    console.log(_id)
    try {
      await axios.delete(`${process.env.REACT_APP_URL_BASE}/games/${_id}`,{
        headers: {
          "access-token": token,
        },
      })
      .then(()=>{
        window.location.reload()
      })
    } catch (error) {
      console.log(error);
    }
  }

  const addFavoriteGame = () => {
    try{
      axios.put(`${process.env.REACT_APP_URL_BASE}/games/${_id}`,{
          title: title,
          details: details,
          image: image,
          price: price,
          fav: true
      } , {
        headers:{
          "access-token": token 
        }
      })
      .then(()=>{
        window.location.reload()
      })
    } catch(error){
      console.log(error)
    }
  }

  const removeFavoriteGame = () => {
    try{
      axios.put(`${process.env.REACT_APP_URL_BASE}/games/${_id}`,{
          title: title,
          details: details,
          image: image,
          price: price,
          fav: false
      } , {
        headers:{
          "access-token": token 
        }
      })
      .then(()=>{
        window.location.reload()
      })
    } catch(error){
      console.log(error)
    }
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      <td>{price}</td>
      <td><SubmitButton mensage={"Eliminar"} handlerClick={deleteGame} /></td>
      <td>
        <SubmitButton mensage={"Editar"} handlerClick={()=>navigate(`/admin/updateGame/${_id}`)} />
      </td>
      <td>
        {fav ? <SubmitButton mensage={"Añadiar fav"}  handlerClick={removeFavoriteGame} /> : <SubmitButton mensage={"Quitar fav"}  handlerClick={addFavoriteGame} />}
      </td>
    </tr>
  )
}

export default AdminGamesTable