import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  productsInCart: {},
  totalPrice: 0,
  status: "idle",
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProductToList: (state, action) => {
      state.allProducts.push(action.payload);
    },
    addProductToCart: (state, action) => {
      if (!Object.keys(state.productsInCart).includes(action.payload)) {
        state.totalPrice += +state.allProducts.find(
          (p) => p.name === action.payload
        ).price;
      }
      Object.assign(state.productsInCart, { [action.payload]: 1 });
    },
    deleteProductFromCart: (state, action) => {
      delete state.productsInCart[action.payload];
    },
    incrementProductCounter: (state, action) => {
      Object.assign(state.productsInCart, {
        [action.payload]: state.productsInCart[action.payload] + 1,
      });
      state.totalPrice += +state.allProducts.find(
        (p) => p.name === action.payload
      ).price;
    },
    decrementProductCounter: (state, action) => {
      Object.assign(state.productsInCart, {
        [action.payload]: state.productsInCart[action.payload] - 1,
      });
      state.totalPrice -= +state.allProducts.find(
        (p) => p.name === action.payload
      ).price;
    },
  },
});

export const {
  addProductToList,
  addProductToCart,
  deleteProductFromCart,
  incrementProductCounter,
  decrementProductCounter,
} = productSlice.actions;

export const allProducts = (state) => state.products.allProducts;
export const productsInCart = (state) => state.products.productsInCart;
export const totalPrice = (state) => state.products.totalPrice;

export default productSlice.reducer;
