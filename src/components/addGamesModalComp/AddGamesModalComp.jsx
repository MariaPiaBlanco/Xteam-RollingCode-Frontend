import React, { useState, useEffect } from "react"
import styles from "./addGamesModalComp.module.css"
import SubmitButton from "../submitButton/SubmitButton";
import axios from "axios";
import { tokenInvalid } from "../../utils/ValidationToken";


const AddGamesModalComp = () => {
  const { bgRegister, border, inputBorder, inputBg, iconInputBg, fontLogin } = styles;
  
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);

  const addGame = (e) => {
    e.preventDefault()
    if (title === undefined || details === undefined || image1 === undefined || image2 === undefined || image3 === undefined || price === undefined || category === undefined){
      alert("Todos los campos son obligatorios")
    } else {
      try {
        const validation = tokenInvalid();
        axios.post(`${process.env.REACT_APP_URL_BASE}/games`,{
            title: title,
            details: details,
            image: [image1, image2, image3],
            price: price,
            category: category
        } , {
            headers: {
              "access-token": validation.token,
            },
        })
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getAllCategories = async () => {
    const getCategories = await axios(`${process.env.REACT_APP_URL_BASE}/category`)
    setCategories(getCategories.data.category);
  } 
  
  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div className="modal fade" id="addGameModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`container-fluid`}>
            <div className=" row justify-content-center align-items-center" >
              <form className={`col-12 w-100 rounded ${bgRegister} ${border} d-flex flex-column align-items-center`} onSubmit={addGame} >
                <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Añadir Juego</h2>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="game" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Titulo" aria-label="text" aria-describedby="basic-addon1" maxLength={50} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="dollar" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="number" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Precio" aria-label="text" aria-describedby="basic-addon1" maxLength={4} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="image" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Imagen 1" aria-label="text" aria-describedby="basic-addon1" onChange={(e)=>setImage1(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="image" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Imagen 2" aria-label="text" aria-describedby="basic-addon1" onChange={(e)=>setImage2(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="image" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Imagen 3" aria-label="text" aria-describedby="basic-addon1" onChange={(e)=>setImage3(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="detail" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Detalle" aria-label="text" aria-describedby="basic-addon1" maxLength={150} onChange={(e)=>setDetails(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                  <label className={`input-group-text ${inputBorder} ${iconInputBg}`} htmlFor="inputGroupSelect01"><box-icon name="lock" color="#ffffff" ></box-icon></label>
                  <select className={`form-select ${inputBg} ${inputBorder}`} id="inputGroupSelect01" defaultValue="Usuario" onChange={(e)=>setCategory(e.target.value)} >
                    <option>Seleccione una categoria</option>
                    {categories && categories.map(category=>{ 
                      return <option key={category._id} value={category._id}>{category.type}</option>
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <SubmitButton mensage={"Enviar"} /> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddGamesModalComp