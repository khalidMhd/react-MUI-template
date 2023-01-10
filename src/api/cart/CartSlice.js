import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const cartInfo = Cookies.get("cart") || null
const partCart = JSON.parse(cartInfo)
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: partCart || [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
        Cookies.set('cart', JSON.stringify(state.items))
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        Cookies.set('cart', JSON.stringify(state.items))
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        Cookies.set('cart', JSON.stringify(state.items))
      }
    },
    decreaseQtyFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        Cookies.set('cart', JSON.stringify(state.items))
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        Cookies.set('cart', JSON.stringify(state.items))
      }
    },
    inreaseQtyFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        Cookies.set('cart', JSON.stringify(state.items))

      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
