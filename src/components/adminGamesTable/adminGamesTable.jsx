import axios from 'axios'
import React from 'react'
import SubmitButton from '../submitButton/SubmitButton'
import ModifyGameModal from '../modifyGameModal/ModifyGameModal'

const AdminGamesTable = ({game}) => {
const { title, details, _id, price, image, fav } = game;
const token = localStorage.getItem("token");

const deleteGame = async () => {
  console.log(_id)
  try {
    await axios.delete(`http://localhost:8080/games/${_id}`,{
      headers: {
        "access-token": token,
      },
    })
    window.location.reload()
  } catch (error) {
    console.log(error);
  }
}

const addFavoriteGame = () => {
  console.log(_id);
  try{
    axios.put(`http://localhost:8080/games/${_id}`,{
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
    window.location.reload()
  } catch(error){
    console.log(error)
  }
}

const removeFavoriteGame = () => {
  try{
    axios.put(`http://localhost:8080/games/${_id}`,{
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
    window.location.reload()
  } catch(error){
    console.log(error)
  }
}

  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{title}</td>
      <td>{details}</td>
      <td>{price}</td>
      <td><SubmitButton mensage={"Eliminar"} handlerClick={deleteGame} /></td>
      <td>
        <SubmitButton dataBsToggle={"modal"} dataBsTarget={"#modifyGameModal"} mensage={"Modificar"} />
        <ModifyGameModal title={title} id={_id} price={price} details={details} image={image} />
      </td>
      <td>
        {fav ? <button onClick={removeFavoriteGame}><box-icon name='heart' type="solid"></box-icon></button> : <button onClick={addFavoriteGame}><box-icon name='heart'></box-icon></button>}
      </td>
    </tr>
  )
}

export default AdminGamesTable