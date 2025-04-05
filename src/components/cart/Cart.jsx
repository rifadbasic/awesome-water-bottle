import React from 'react';
import './Cart.css';

const Cart = ({cart , removeItemFromCart}) => {
  return (
    <div className='cart-container'>
      
        <li style={{listStyle: 'none' , display: 'flex', flexDirection:'column'}}>
        {
          cart.map(bottle => <div key={bottle.id}>
            <div style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              gap: '10px', 
              alignItems: 'center', 
              margin: '10px'}}>
            
              <img src={bottle.img} alt="" />
              <h3>{bottle.name}</h3>
              <p>$ {bottle.price}</p>
              <button onClick={() => removeItemFromCart(bottle.id)}>Remove</button>
            </div>
            
          </div>)
        }
        </li>
      
    </div>
  );
};

export default Cart;