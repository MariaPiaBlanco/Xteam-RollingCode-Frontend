import React from "react";
import LoginComp from "../../components/loginComp/LoginComp";
import style from "./login.module.css"

function Login() {
  return (
    <section>
      <LoginComp className={style} />
    </section>
  );
}

export default Login;
