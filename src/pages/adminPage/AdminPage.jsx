import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import AddUserModalComp from "../../components/adduserModalComp/AddUserModalComp";
import AddGamesModalComp from "../../components/addGamesModalComp/AddGamesModalComp";
import SubmitButton from "../../components/submitButton/SubmitButton";
import styles from "./adminPage.module.css"
import AdminGamesTable from "../../components/adminGamesTable/adminGamesTable";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  const {productsTable} = styles;

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
  
  const getAllgames = async () => {
    try {
      const getGames = await axios.get("http://localhost:8080/games")
      setGames(getGames.data.games);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllgames();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11">
          <h2 className=" text-center col-12">Tabla de usuarios</h2>
          <div className="col-6">
            <SubmitButton  mensage={"Agregar usuario"} dataBsToggle="modal" dataBsTarget="#addUserModal" />
          </div>
          <AddUserModalComp />
          <div className="col-12">
            <table className={`table table-dark table-hover table-responsive ${productsTable}`}>
              <thead>
                <tr>
                  <th scope="col" className="p-3">Nombre</th>
                  <th scope="col" className="p-3">Email</th>
                  <th scope="col" className="p-3">Admin</th>
                  <th scope="col" className="p-3">Estado</th>
                  <th scope="col" className="p-3">Banear</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => <AdminUserTable user={user} key={user._id} />)}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="col-12 text-center">Tabla de juegos</h2>
            <div className="col-6">
            <SubmitButton  mensage={"Agregar juego"} dataBsToggle="modal" dataBsTarget="#addGameModal" />
          </div>
            <AddGamesModalComp />
            <table className="table table-dark table-hover table-bordered align-middle table-responsive col-10">
              <thead>
                <tr>
                  <th scope="col">ID Juego</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Detalle</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Eliminar</th>
                  <th scope="col">Modificar</th>
                  <th scope="col">Destacar</th>
                </tr>
              </thead>
              <tbody>
                {games?.map((game)=> <AdminGamesTable game={game} key={game._id}/>)} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage