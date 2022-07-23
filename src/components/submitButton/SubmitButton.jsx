import React from "react";
import styles from "./submitButton.module.css"

const SubmitButton = () => {
  return <button type="submit" className={`btn ${styles.btnSubmit} mt-3 rounded`}>Ingresar</button>;
}

export default SubmitButton;