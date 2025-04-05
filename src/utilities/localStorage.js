
// get item from local storage
const getItemFromLocalStorage = () => {
  const storeCart = localStorage.getItem('cart');
  return storeCart ? JSON.parse(storeCart) : [];
}

// save item to local storage
const saveItemToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// add to cart
const addItemToLocalStorage = (id) => {
  const cart = getItemFromLocalStorage();
  const newCart = [...cart, id];
  saveItemToLocalStorage(newCart);
}


// remove item

const removeItemFromLocalStorage = (id) => {
  const cart = getItemFromLocalStorage();
  const remaining = cart.filter(storeId => storeId.id !== id);
  saveItemToLocalStorage(remaining);
}

export {
  addItemToLocalStorage as addToCart, 
  getItemFromLocalStorage as getCart,
  removeItemFromLocalStorage as removeCart
};