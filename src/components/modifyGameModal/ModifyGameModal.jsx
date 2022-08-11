import React, { useState, useEffect } from 'react'
import styles from "./modifyGameModal.module.css";
import SubmitButton from '../submitButton/SubmitButton';
import axios from "axios";

const ModifyGameModal = ({title, details, price, image, id}) => {
	const { bgRegister, border, inputBorder, inputBg, iconInputBg, fontLogin } = styles;
  const [gameTitle, setGameTitle] = useState(title)
  const[gamePrice, setGamePrice] = useState(price)
  const[image1, setImage1] = useState(image[0])
  const[image2, setImage2] = useState(image[1])
  const[image3, setImage3] = useState(image[2])
  const [gameDetails, setGameDetails] = useState(details)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState()

  const modifyGame = (e) => {
    const token = localStorage.getItem("token")

    e.preventDefault()
    try{
      axios.put(`http://localhost:8080/games/${id}`,{
          title: gameTitle,
          details: gameDetails,
          image: [image1, image2, image3],
          price: gamePrice,
          fav: false,
          category: category
      } , {
        
          headers: {
            "access-token": token 
          },
        
      })
      window.location.reload()
    } catch(error){
      console.log(error)
    }


  }
  
  const getAllCategories = async () => {
    const getCategories = await axios("http://localhost:8080/category")
    setCategories(getCategories.data.category);
  } 

  useEffect(() => {
    getAllCategories()
  }, [])


  return (
    <div className="modal fade" id="modifyGameModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`container-fluid`}>
            <div className=" row justify-content-center align-items-center" >
              <form className={`col-12 w-100 rounded ${bgRegister} ${border} d-flex flex-column align-items-center`} onSubmit={modifyGame} >
                <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Modificar juego Juego</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="game" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Titulo" aria-label="text" aria-describedby="basic-addon1" maxLength={50} value={gameTitle} onChange={(e)=>setGameTitle(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="dollar" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="number" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Precio" aria-label="text" aria-describedby="basic-addon1" maxLength={4} value={gamePrice} onChange={(e)=>setGamePrice(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="image" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Imagen 1" aria-label="text" aria-describedby="basic-addon1" value={image1} onChange={(e)=>setImage1(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="image" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Imagen 1" aria-label="text" aria-describedby="basic-addon1" value={image2} onChange={(e)=>setImage2(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="image" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Imagen 1" aria-label="text" aria-describedby="basic-addon1" value={image3} onChange={(e)=>setImage3(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="detail" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Detalle" aria-label="text" aria-describedby="basic-addon1" maxLength={150} value={gameDetails} onChange={(e)=>setGameDetails(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                  <label className={`input-group-text ${inputBorder} ${iconInputBg}`} htmlFor="inputGroupSelect01"><box-icon name="lock" color="#ffffff" ></box-icon></label>
                  <select className={`form-select ${inputBg} ${inputBorder}`} id="inputGroupSelect01" defaultValue="Usuario" onChange={(e)=>setCategory(e.target.value)} >
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

export default ModifyGameModal