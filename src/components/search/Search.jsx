import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './search.module.css';

export const Search = () => {
  const {inputBorder, inputBg, iconInputBg } = styles;
  const [games, setGames] = useState([]);
  const [gamesFiltered, setGamesFiltered] = useState([]);
  const handleChange = (event) => {
    let search = event.target.value;
    let filtered = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
    
    if(search.length >= 1) {
      setGamesFiltered(filtered);
    } else {
      setGamesFiltered([]);
    }
  };

  const getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL_BASE}/games`)
      .then((response) => {
        setGames(response.data);
        setGamesFiltered([]);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container-fluid col-4 d-none d-sm-block">
        <form className="d-flex justify-content-center align-items-center h-100" role="search">
          <div className="input-group mb-3 p-2 w-50">          
          <input
            className={`form-control ${inputBorder} ${inputBg}`}
            type="search"
            placeholder="Search"
            onChange={handleChange}
            id="searchFilterInput"
            aria-label="Search"
          />
          <button className={`btn btn-outline-success input-group-text ${inputBorder} ${iconInputBg}`} type="submit">
          <box-icon name="search" color="#ffffff" ></box-icon>
          </button>
          <div>        
          {gamesFiltered.map((key) =>{
            return <div className="nameGame text-light" key={key}>
              {key.title}
              </div>
          })}
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};
