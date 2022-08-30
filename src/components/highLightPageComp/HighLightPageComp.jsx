import React, { useEffect, useState } from 'react'
import SubmitButton from '../submitButton/SubmitButton';
import styles  from "./highLightPageComp.module.css"
import {Comment} from '../comment/Comment';
import axios from 'axios';
import { tokenInvalid } from '../../utils/ValidationToken';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HighLightPageComp = ( {gameData,idGame} ) => {
  const {title, image, details } = gameData;
  const { imageSize, inputBg, inputBorder,errorMessage,btnSubmit, link } = styles;
  const [comments, setComments] = useState([])
  const [commentField, setCommentField] = useState('')
  const [errorMessageText, setErrorMessageText] = useState('')
  const [errorlogin, setErrorlogin] = useState(false)
  const btnMensage = "Añadir al carrito";
const navigate = useNavigate()
const imageDefault = 'https://i.gifer.com/Up8y.gif'
  const getData = async () =>{ 
    await axios.get(`${process.env.REACT_APP_URL_BASE}/comments/game/${idGame}`)
      .then((response)=>{
        setComments(response.data)
      })
    } 
    
    useEffect(() => {
      getData();
    },[])

  const saveComment = ()=>{
    // const token = localStorage.getItem('token')
    // const {id:idUser} = jwtDecode(token);; 
    let response = tokenInvalid()

    if(commentField.trim().length === 0){
          setErrorlogin(true);
          setErrorMessageText("Debes ingresar un texto válido en la caja de comentarios")
          return
    }

    if(response.invalidToken){
      setErrorlogin(true);
      setErrorMessageText(response.msg)
      return;
    }
    
    axios
        .post(`${process.env.REACT_APP_URL_BASE}/comments`,
        {
            user: response.idUser,
            game: idGame,
            comment: commentField
          },
          { headers: {
              'Content-Type': 'application/json',
              'access-token': response.token
            }
          }
          )
        .then((response) => {
          setErrorlogin(false);
          setErrorMessageText('')
          window.location.reload()
        })
        .catch( err => {
          setErrorlogin(true);
          setErrorMessageText("Debes iniciar sesión para realizar esta acción")
        });
  }

  return (
    <motion.section
      className="container-fluid"
    >
      <div className="row">
        {image && (
          <img
            src={image && image[0]? image[0] : imageDefault}
            alt="{title}"
            className="col-lg-5 rounded-3 m-4 img-fluid"
          />
        )}
        <div className="col-lg-5 bg-transparent text-center m-4">
          <h2 className="my-5 display-4">{title}</h2>
          <p>{details}</p>
          <div className="d-flex justify-content-center">
            <div className="w-25">
              <SubmitButton
                mensage={btnMensage}
                handlerClick={() => navigate("/error")}
              />
            </div>
          </div>
        </div>
        {image && (
          <img src={image && image[1]? image[1] : imageDefault} alt="" className={`col-lg-5 m-4 ${imageSize}`} />
        )}
        {image && (
          <img src={image && image[2] ? image[2] : imageDefault} alt="" className={`col-lg-5 m-4 ${imageSize}`} />
        )}
        <div className="mb-3 m-2 col-3 ">
          <button className={`${btnSubmit} `}>
            <Link to="/" className={`${link}`}>
              <box-icon name="chevron-left-square" color="#ffffff"></box-icon>{" "}
              Volver
            </Link>
          </button>
        </div>
        <div className="col-lg-12 d-flex flex-column align-items-center">
          <h2>Ingresa un comentario</h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            maxLength={250}
            className={`w-75 rounded-3 ${inputBg} ${inputBorder}`}
            onChange={(e) => {
              setErrorMessageText("");
              setCommentField(e.target.value);
            }}
          ></textarea>
          {errorlogin && <p className={errorMessage}>{errorMessageText}</p>}
          <div className="w-25">
            <SubmitButton
              mensage={"Publicar comentario"}
              handlerClick={saveComment}
            />
          </div>
          {Array.isArray(comments)
            ? comments?.map((detail) => (
                <Comment detail={detail} key={detail._id}></Comment>
              ))
            : null}
        </div>
      </div>
    </motion.section>
  );
}

export default HighLightPageComp