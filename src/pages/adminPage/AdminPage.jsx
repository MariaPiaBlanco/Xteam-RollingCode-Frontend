import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import AddUserModalComp from "../../components/adduserModalComp/AddUserModalComp";
import SubmitButton from "../../components/submitButton/SubmitButton";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const getUsers = await axios(`http://localhost:8080/users`, {
        headers: {
          "access-token": token,
        },
      });
      setUsers(getUsers.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
          <h2 className=" text-center">Tabla de usuarios</h2>
          <SubmitButton  mensage={"Agregar usuario"} dataBsToggle="modal" dataBsTarget={"#addUserModal"} />
          <AddUserModalComp />
          <table className="table table-dark table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Estado</th>
                <th scope="col">Banear</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <AdminUserTable user={user} key={user._id} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default AdminPage