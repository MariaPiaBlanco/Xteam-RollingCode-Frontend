import React, { useState } from 'react'
import styles from "./updateCategorieForm.module.css"
import SubmitButton from '../submitButton/SubmitButton';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UpdateCategoryForm = ({idCategorie}) => {
  const navigate = useNavigate();
  const { bgLogin, border, inputBorder, inputBg, iconInputBg, fontLogin } = styles;
  const [categorieType, setCategorieType] = useState()
  
  const updateCategorie = (e) => {
    e.preventDefault();
    console.log(categorieType);
    axios.put(`${process.env.REACT_APP_URL_BASE}/category/${idCategorie}`, {
      type: categorieType
    })
    navigate("/admin")
  }

  return (
    <div className={`container-fluid`}>
      <div className=" row justify-content-center align-items-center vh-100" >
        <form className={`col-10 col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xxl-2 py-5 px-3 rounded ${bgLogin} ${border} d-flex flex-column align-items-center`} onSubmit={updateCategorie} >
          <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Actualizar categoria</h2>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="categoria" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setCategorieType(e.target.value)} />
          </div>    
          <SubmitButton mensage={"Enviar"} />  
        </form>
      </div>
    </div>
  )
}

export default UpdateCategoryForm