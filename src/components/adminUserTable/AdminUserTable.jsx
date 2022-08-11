import axios from "axios";
import React from "react";
import SubmitButton from "../submitButton/SubmitButton";

const AdminUserTable = ({user}) => {
  const { email, fullname, admin, banned, _id, password } = user;
  const token = localStorage.getItem("token")

  const bannUser = () => {
    try {
      console.log(_id);
      axios.put(`http://localhost:8080/users/${_id}`, {
        fullname: fullname,
        email: email,
        password: password,
        banned: true,
        admin: admin
      }, {
        headers: {
          "access-token": token,
        }
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const activeUser = () => {
    try {
      axios.put(`http://localhost:8080/users/${_id}`, {
        fullname: fullname,
        email: email,
        password: password,
        banned: false,
        admin: admin
      }, {
        headers: {
          "access-token": token,
        }
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <tr>
      <td>{`${fullname}`}</td>
      <td>{`${email}`}</td>
      <td>{`${admin}`}</td>
      <td>{`${banned}`}</td>
      <td>
        {banned ? <SubmitButton mensage={"Activar"} handlerClick={activeUser} /> : <SubmitButton mensage={"Desactivar"} handlerClick={bannUser} />}
      </td>
    </tr>
  );
}

export default AdminUserTable