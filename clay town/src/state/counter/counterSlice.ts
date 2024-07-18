import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PricePayload {
  price: number;
  id: number;
  itemTotalPrice: number;
  cartCount: number;
  image: string;
  title: string;
}

interface CartItem {
  id: number;
  price: number;
  itemTotalPrice: number;
  cartCount: number;
  image: string;
  title: string;
}

interface counterState {
  cart: CartItem[];
  cartCount: number;
  totalPrice: number;
}

const initialState: counterState = {
  cart: [],
  cartCount: 0,
  totalPrice: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state, action: PayloadAction<PricePayload>) => {
      state.cartCount += 1;
      state.totalPrice += action.payload.price;

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cart = [
          ...state.cart,
          {
            id: action.payload.id,
            price: action.payload.price,
            itemTotalPrice: action.payload.price,
            cartCount: 1,
            image: action.payload.image,
            title: action.payload.title,
          },
        ];
      } else {
        existingItem.cartCount += 1;
        existingItem.itemTotalPrice += action.payload.price; 
      }
    },

    incrementItem: (state, action: PayloadAction<PricePayload>) => {
      //increase state count
      state.cartCount += 1;

      //select the id of the clicked item
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        //increase the cartCount for the selected item
        cartItem.cartCount = cartItem.cartCount + 1;
        //increase the total price of the selected item
        cartItem.itemTotalPrice += action.payload.price;
        //increase the total price in the state
        state.totalPrice += action.payload.price;
      }
    },
    decrementItem: (state, action: PayloadAction<PricePayload>) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem && cartItem.cartCount > 0) {
        cartItem.cartCount -= 1;
        cartItem.itemTotalPrice -= action.payload.price;
        state.cartCount -= 1;
        state.totalPrice -= action.payload.price;

        // Remove the item from the cart if cartCount is 0
        if (cartItem.cartCount === 0) {
          state.cart = state.cart.filter((item) => item.id !== cartItem.id);
        }
      }
    },

    /* 
decrementItem: (state, action: PayloadAction<PricePayload>) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem && cartItem.cartCount > 0) {
        cartItem.cartCount -= 1;
        cartItem.itemTotalPrice -= action.payload.price;
        state.cartCount -= 1;
        state.totalPrice -= action.payload.price;

        // Remove the item from the cart if cartCount is 0
        if (cartItem.cartCount === 0) {
          state.cart = state.cart.filter((item) => item.id !== cartItem.id);
        }
      }
    },
*/

    clearCart: (state) => {
      state.cart = [];
      state.cartCount = 0;
      state.totalPrice = 0;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.cartCount;
        total += item.cartCount * item.price;
      });
      state.cartCount = amount;
      state.totalPrice = total;
    },
    removeItem: (state, action: PayloadAction<PricePayload>) => {
      //get the id of the item to be removed
      const itemId = action.payload.id;

      //check the cart state to get the id that matches the id of the clicked item
      const existingItem = state.cart.find((item) => item.id === itemId);
      if (existingItem) {
        //deduct the state cartCount with the value of the cartCount of the item to be deleted
        state.cartCount -= existingItem.cartCount;

        //deduct the state totalPrice with the value of the itemTotalPrice of the item to be deleted
        state.totalPrice -= existingItem.itemTotalPrice;

        //remove the item from the cart state.
        state.cart = state.cart.filter((item) => item.id !== itemId);
      }
    },
  },
});

//exporting actions
export const {
  increment,
  incrementItem,
  decrementItem,
  clearCart,
  removeItem,
} = counterSlice.actions;

export default counterSlice.reducer;
