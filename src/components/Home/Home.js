import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
  //   console.log(players);
  return (
    <div className="home-container">
      <div className="player-container">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="input-area"
          type="text"
          name=""
          id=""
          placeholder="Type player Name"
        />
        <button className="btn-search">Search</button>
        <Players players={players} cart={cart} setCart={setCart}></Players>
      </div>
      <div className="cart-container">
        <p>this is cart container</p>
        {cart?.map((p) => (
          <li>{p.idPlayer}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
