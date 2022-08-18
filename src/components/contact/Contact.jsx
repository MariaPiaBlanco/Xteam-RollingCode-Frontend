import React from 'react'
import Emailjs from 'emailjs-com'
import styles from '../contact/contact.module.css'
import SubmitButton from '../submitButton/SubmitButton';

const Contact = () => {
    function enviarMail(e){
        e.preventDefault()
        const service = 'service_hcvrwva'
        const template = 'template_dql9wbe'
        const llave = 'IB2mStLqUM8Gg_JTP'
        Emailjs.sendForm(service,template,e.target,llave)
        .then(res=>{
            alert('El mensaje fue enviado con exito, gracias por comunicarte con Xteam!')
            console.log(res.text)
        },
        (error) => {
            console.log(error.text);
        })
    }
    const btnMensage = "Enviar";
  return (
    <div className={`m-5 ${styles.body}  `}>
    <form onSubmit={enviarMail}>
    <div className={` m-3 p-2 conteiner-fluid ${styles.body}`}>
      <h3 className={`d-flex justify-content-center`}>
        Tienes dudas, contactate con nosotros</h3>
      <h4  className={`d-flex justify-content-center `}>Te responderemos lo mas rapido posible!!</h4>
      <div className={`d-flex justify-content-center row`} >
          <div className={`mb-3 m-2 col-6 `}>
            <label for="exampleFormControlInput2" className={`form-label ${styles.label}`}>
              Nombre Completo
             <box-icon name='user' color="#ffffff" className={` `}></box-icon></label>
              <input type="nombreCompleto" className={`form-control ${styles.input}`} id="nombreCompleto" name="nombreCompleto" placeholder="Nombre completo"
              required minLength={3} maxLength={50}/>
          </div>
          <div className={`mb-3 m-2 col-6 `}>
            <label for="exampleFormControlInput1" className={`form-label ${styles.label}`}>E-mail
            <box-icon name="envelope" color="#ffffff" ></box-icon> </label>
            <input type="email" className={`form-control ${styles.input}`} id="mail"  name= "mail" placeholder="ejemplo@ejemplo.com" required/>
          </div>
            <div className={`mb-3 m-2 col-6 `}>
              <label for="exampleFormControlTextarea1" className={`form-label ${styles.label}`}>Message
              <box-icon name='message-detail' color="#ffffff"></box-icon></label>
              <textarea className={`form-control ${styles.input}`} id="mensaje" name="mensaje" rows="3" required placeholder='Por favor ingrese su mensaje' minLength={30}></textarea>
           </div>
          <div className={`mb-3 m-2 col-6 `}>
          <SubmitButton mensage={btnMensage}/>
          </div>   
      </div>        
     </div>
    </form>
</div>
  )
}

export default Contact
