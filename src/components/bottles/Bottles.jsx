import React, { use , useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css';
import { addToCart, removeCart } from '../../utilities/localstorage';
import { getCart } from '../../utilities/localstorage';
import Cart from '../cart/Cart';

const Bottles = ({bottlesPromise}) => {
  // cart state
  const [cart, setCart] = useState([]);

  // bottles 
  const bottles = use(bottlesPromise);

  // remove item
  const removeItemFromCart = (id) => {
    // console.log('item delet', id);
    const remaining = cart.filter(bottle => bottle.id !== id);
    setCart(remaining);
    removeCart(id);
  }

  // add to cart
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToCart(bottle.id);
  }

  // get cart
  useEffect(() => {
    const storedCartIds = getCart();
    // console.log(storedCartIds);
    
    const storageCart = [];

    for (const id of storedCartIds) {
      const addedBottle = bottles.find(bottle => bottle.id === id);
      if (addedBottle) {
        storageCart.push(addedBottle);
      }
    }

    // console.log(storageCart);
    setCart(storageCart);

  }, [bottles]);

  
  
  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <h3>Cart : {cart.length}</h3>
      <Cart cart={cart} removeItemFromCart={removeItemFromCart}></Cart>

      <div className='bottles'>
        {
          bottles.map(bottle => <Bottle 
          key={bottle.id} 
          bottle={bottle}
          handleAddToCart={handleAddToCart}></Bottle>)
        }
      </div>

    </div>
  );
};

export default Bottles;