import React from 'react';
import './Bottle.css';

const bottle = ({bottle, handleAddToCart}) => {
  const {name, price, stock} = bottle;

  return (
    <div className='card bottle'>
      <img src={bottle.img} alt="bottle" />
      
      <h3>{name}</h3>
      <p>$ {price}</p>
      <p>Stock : {stock}</p>

      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
      
    </div>
  );
};

export default bottle;