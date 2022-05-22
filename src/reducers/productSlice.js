import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../json-server/data";
import { timeout } from "../utils/timeouts";

const initialState = {
  allProducts: [],
  productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || {},
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  status: "idle",
};

function updateLocalStorage(state) {
  localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
  localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
}

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    // const json = await fetch("http://localhost:4000/products").then(
    //   (response) => response.json()
    // );
    // return json;
    await timeout(1500);
    return data;
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      if (!Object.keys(state.productsInCart).includes(action.payload)) {
        state.totalPrice += +state.allProducts.find(
          (p) => p.name === action.payload
        ).price;
      }
      Object.assign(state.productsInCart, { [action.payload]: 1 });
      updateLocalStorage(state);
    },

    deleteProductFromCart: (state, action) => {
      delete state.productsInCart[action.payload];
      updateLocalStorage(state);
    },

    incrementProductCounter: (state, action) => {
      Object.assign(state.productsInCart, {
        [action.payload]: state.productsInCart[action.payload] + 1,
      });
      state.totalPrice += +state.allProducts.find(
        (p) => p.name === action.payload
      ).price;
      updateLocalStorage(state);
    },

    decrementProductCounter: (state, action) => {
      Object.assign(state.productsInCart, {
        [action.payload]: state.productsInCart[action.payload] - 1,
      });
      state.totalPrice -= +state.allProducts.find(
        (p) => p.name === action.payload
      ).price;
      updateLocalStorage(state);
    },

    clearTotalPrice: (state) => {
      state.totalPrice -= state.totalPrice;
      updateLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      action.payload.forEach((product) => state.allProducts.push(product));
    });
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  incrementProductCounter,
  decrementProductCounter,
  clearTotalPrice,
} = productSlice.actions;

export const allProducts = (state) => state.products.allProducts;
export const productsInCart = (state) => state.products.productsInCart;
export const totalPrice = (state) => state.products.totalPrice;

export default productSlice.reducer;
