import axios from 'axios';
import React from 'react'
import SubmitButton from '../submitButton/SubmitButton';
import { useNavigate } from "react-router-dom";

const AdminCategoryTable = ({categorie}) => {
  const { type , _id } = categorie;
  const navigate = useNavigate();
  
  const deleteCategory = (e) => {
    e.preventDefault();
    try {
      axios.delete(`${process.env.REACT_APP_URL_BASE}/category/${_id}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <tr>
      <td>{type}</td>
      <td>
        <SubmitButton mensage={"Editar"} handlerClick={()=>navigate(`/admin/updateCategorie/${_id}`)} />
      </td>
      <td><SubmitButton mensage={"Eliminar"} handlerClick={deleteCategory} /></td>
    </tr>
  )
}

export default AdminCategoryTable