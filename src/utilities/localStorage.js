
// get item from local storage
const getItemFromLocalStorage = () => {
  const storeCart = localStorage.getItem('cart');

  if (storeCart) {
    return JSON.parse(storeCart);
  }
  return [];
}

// save item to local storage
const saveItemToLocalStorage = (id) => {
  localStorage.setItem('cart', JSON.stringify(id));

}

// add to cart
const addItemToLocalStorage = (id) => {
  const cart = getItemFromLocalStorage();
  const newCart = [...cart, id];
  saveItemToLocalStorage(newCart);
}


// remove item

const removeItemFromLocalStorage = (id) => {
  const cartItem = getItemFromLocalStorage();
  const remainingCart = cartItem.filter(storeId => storeId.id !== id);
  saveItemToLocalStorage(remainingCart);
}

export {
  addItemToLocalStorage as addToCart, 
  getItemFromLocalStorage as getCart,
  removeItemFromLocalStorage as removeCart
};