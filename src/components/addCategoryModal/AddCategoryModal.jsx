import React, {useState} from 'react'
import styles from "./addCategoryModal.module.css"
import SubmitButton from '../submitButton/SubmitButton';
import axios from 'axios';

const AddCategoryModal = () => {
  const { bgRegister, border, inputBorder, inputBg, iconInputBg, fontLogin } = styles;
  const token = localStorage.getItem("token");
  const [category, setCategory] = useState();

  const addCategory = () => {
    try {
      axios.post(`${process.env.REACT_APP_URL_BASE}/category`,{
        type: category
      } , {
        headers: {
          "access-token": token,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`container-fluid`}>
            <div className=" row justify-content-center align-items-center" >
              <form className={`col-12  rounded ${bgRegister} ${border} d-flex flex-column align-items-center`} onSubmit={addCategory} >
                <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Añadir Categoria</h2>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="category" color="#ffffff" ></box-icon></span>
                  <input autoComplete="off" type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Categoria" aria-label="text" aria-describedby="basic-addon1" maxLength={50} onChange={(e)=>setCategory(e.target.value)} />
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

export default AddCategoryModal