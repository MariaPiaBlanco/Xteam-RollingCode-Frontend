import React from "react";
import styles from "./submitButton.module.css"

const SubmitButton = ({mensage}) => {
  return <button type="submit" className={`btn ${styles.btnSubmit} mt-3 rounded`}>{mensage}</button>;
}

export default SubmitButton;