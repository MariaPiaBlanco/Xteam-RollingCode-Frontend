import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminUserTable from "../../components/adminUserTable/AdminUserTable";
import AddUserModalComp from "../../components/adduserModalComp/AddUserModalComp";
import AddGamesModalComp from "../../components/addGamesModalComp/AddGamesModalComp";
import AddCategoryModal from "../../components/addCategoryModal/AddCategoryModal";
import SubmitButton from "../../components/submitButton/SubmitButton";
import styles from "./adminPage.module.css"
import AdminGamesTable from "../../components/adminGamesTable/adminGamesTable";
import AdminCategoryTable from "../../components/adminCategoryTable/AdminCategoryTable";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([])
  const {productsTable} = styles;

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const getUsers = await axios(`${process.env.REACT_APP_URL_BASE}/users`, {
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
      const getGames = await axios.get(`${process.env.REACT_APP_URL_BASE}/games`)
      setGames(getGames.data.games);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllgames();
  }, []);

  const getAllCategories = async () => {
    const getCategories = await axios(`${process.env.REACT_APP_URL_BASE}/category`)
    setCategories(getCategories.data.category)
  }
  
  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div>
      <section className="m-5">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <h2 className="col-12 col-lg-6 text-center display-4">Tabla de usuarios</h2>
            <div className="col-12 col-lg-6">
              <SubmitButton  mensage={"Agregar usuario"} dataBsToggle="modal" dataBsTarget="#addUserModal" />
              <AddUserModalComp />
            </div>
          </div>
        </div>
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
            {users?.map((user) => <AdminUserTable user={user} key={user._id} />)}
          </tbody>
        </table>
      </section>
      <section className="m-5">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <h2 className="col-12 col-lg-6 text-center display-4">Tabla de Juegos</h2>
            <div className="col-12 col-lg-6">
              <SubmitButton  mensage={"Agregar juego"} dataBsToggle="modal" dataBsTarget="#addGameModal" />
              <AddGamesModalComp />
            </div>
          </div>
        </div>
        <table className="table table-dark table-hover table-bordered align-middle table-responsive col-10">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Detalle</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Modificar</th>
              <th scope="col">Desstacar</th>
            </tr>
          </thead>
          <tbody>
            {games?.map((game)=> <AdminGamesTable game={game} key={game._id}/>)} 
          </tbody>
        </table>
      </section>    
      <section className="m-5">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <h2 className="col-12 col-lg-6 text-center display-4">Tabla de Categorias</h2>
            <div className="col-12 col-lg-6">
              <SubmitButton  mensage={"Agregar categoria"} dataBsToggle="modal" dataBsTarget="#addCategoryModal" />
              <AddCategoryModal />
            </div>
          </div>
        </div>
        <table className="table table-dark table-hover table-bordered align-middle table-responsive col-10">
          <thead>
            <tr>
              <th scope="col">Categoria</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((categorie)=> <AdminCategoryTable categorie={categorie} key={categorie._id}/>)} 
          </tbody>
        </table>
      </section>    
    </div>  
  )
}

export default AdminPage