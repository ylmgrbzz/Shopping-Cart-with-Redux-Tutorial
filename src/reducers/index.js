import { data } from "../data";

const initialState = {
  bookList: data,
  cart: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
