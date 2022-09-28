import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart }) => {
  //   console.log(player);
  const { strCutout, strPlayer, idPlayer } = player;
  const handleAddToCart = () => {
    const info = {
      strCutout,
      strPlayer,
      idPlayer,
    };
    if (cart) {
      const newPlayer = [...cart, info];
      setCart(newPlayer);
    }
  };
  console.log(cart);
  return (
    <div className="single-player">
      <img src={strCutout} alt="" />
      <h5>{strPlayer}</h5>
      {/* <p>
        {strDescriptionEN ? strDescriptionEN.slice(0, 100) : "not avilable"}
      </p> */}
      <button>Details</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button>Bookmark</button>
    </div>
  );
};

export default SinglePlayer;
