import React from 'react'
import styles from "./updateGameForm.module.css"
import SubmitButton from '../submitButton/SubmitButton';

const UpdateGameForm = ({ updateGame , categories, setCategorie, setTitle, setDetails, setPrice, setImage1, setImage2, setImage3}) => {
  const { bgLogin, border, inputBorder, inputBg, iconInputBg, fontLogin } = styles;

  return (
    <div className={`container-fluid`}>
      <div className=" row justify-content-center align-items-center vh-100" >
        <form className={`col-10 col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xxl-2 py-5 px-3 rounded ${bgLogin} ${border} d-flex flex-column align-items-center`} onSubmit={updateGame} >
          <h2 className={`text-center fs-4 mb-5 pb-4 mt-3 ${fontLogin}`}>Actualizar Juego</h2>
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="Titulo" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setTitle(e.target.value)} />
          </div>    
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="number" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="precio" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setPrice(e.target.value)} />
          </div>    
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="detalle" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setDetails(e.target.value)}  />
          </div>    
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="imagen1" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setImage1(e.target.value)} />
          </div>    
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="imagen2" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setImage2(e.target.value)} />
          </div>    
          <div className="input-group mb-3 p-2">
            <span className={`input-group-text ${inputBorder} ${iconInputBg}`} id="basic-addon1"><box-icon name="envelope" color="#ffffff" ></box-icon></span>
            <input autoComplete='off' type="text" className={`form-control  ${inputBorder} ${inputBg}`} placeholder="imagen3" aria-label="email" aria-describedby="basic-addon1" onChange={(e)=>setImage3(e.target.value)} />
          </div>    
          <div className="input-group mb-3">
                  <label className={`input-group-text ${inputBorder} ${iconInputBg}`} htmlFor="inputGroupSelect01"><box-icon name="lock" color="#ffffff" ></box-icon></label>
                  <select className={`form-select ${inputBg} ${inputBorder}`} id="inputGroupSelect01"  onChange={(e)=>setCategorie(e.target.value)} >
                    {categories && categories.map(categorie=>{ 
                      return <option key={categorie._id} value={categorie._id}>{categorie.type}</option>
                    })}
                  </select>
                </div>
          <SubmitButton mensage={"Enviar"} />  
        </form>
      </div>
    </div>
  )
}

export default UpdateGameForm