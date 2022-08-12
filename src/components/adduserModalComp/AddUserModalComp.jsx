import React, { useState } from 'react'
import styles from "./addUserModalComp.module.css"
import SubmitButton from '../submitButton/SubmitButton';
import axios from "axios";

const AddUserModalComp = () => {
  const { bgRegister, border, inputBorder, inputBg, iconInputBg, fontLogin } = styles;
  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [secondPass, setSecondPass] = useState()
  const [admin, setAdmin] = useState(false)

  const addUser = (event) => {
    event.preventDefault();
    
    if (
      fullname === undefined ||
      email === undefined ||
      password === undefined ||
      secondPass === undefined ||
      admin === undefined
    ) {
      alert("Todos los campos son obligatorios");
    } else if (password !== secondPass) {
      alert("Las contraseñas deben coincidir");
    } else if (!email.includes("@")) {
      alert("Ingrese un email valido");
    } else if (fullname.length > 25) {
      alert("El nombre no puede superar los 25 caracteres");
    } else {
      try {
        axios
            .post(`http://localhost:8080/users`, {
              fullname: fullname,
              email: email,
              password: password,
              admin: admin
            })
            // window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
    
  }


  return (
    <div className="modal fade col-2" id="addUserModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`container-fluid`}>
            <div className=" row justify-content-center align-items-center" >
              <form className={`col-12 w-100 rounded ${bgRegister} ${border} d-flex flex-column align-items-center`} onSubmit={addUser} >
                <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Añadir Usuario</h2>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name='user' color="#ffffff" ></box-icon></span>
                  <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Nombre" aria-label="text" aria-describedby="basic-addon1" maxLength={25} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
                  <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg} `} placeholder="Email" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text  ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
                  <input autoComplete='off' type="password" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Password" aria-label="password" aria-describedby="basic-addon1" minLength={8} onChange={(e)=>setPassword(e.target.value)}/>
                </div>      
                <div className="input-group mb-3 p-2">
                  <span className={`input-group-text  ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="lock" color="#ffffff" ></box-icon></span>
                  <input autoComplete='off' type="password" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Repetir Password" aria-label="password" aria-describedby="basic-addon1" minLength={8} onChange={(e)=>setSecondPass(e.target.value)}/>
                </div>        
                <div className="input-group mb-3">
                  <label className={`input-group-text ${inputBorder} ${iconInputBg}`} htmlFor="inputGroupSelect01"><box-icon name="lock" color="#ffffff" ></box-icon></label>
                  <select className={`form-select ${inputBg} ${inputBorder}`} id="inputGroupSelect01" defaultValue="Usuario" onChange={(e)=>setAdmin(e.target.value)} >
                    <option value={false}>Usuario</option>
                    <option value={true}>Administrador</option>
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

export default AddUserModalComp