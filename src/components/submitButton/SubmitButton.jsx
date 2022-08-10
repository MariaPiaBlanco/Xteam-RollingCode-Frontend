import React from "react";
import styles from "./submitButton.module.css"

const SubmitButton = ({mensage, handlerClick}) => {
  return <button type="submit" onClick={handlerClick} className={`btn ${styles.btnSubmit} mt-3 rounded`}>{mensage}</button>;
}

export default SubmitButton;