import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // vanilla(older) Redux => DON'T MUTATE THE STATE
      // const newState = [...state]
      // newState.push(action.payload);
      // return newState;

      // redux toolkit
      //  we have to mutate the states

      // redux toolkit uses immer behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // if need to console then use
      console.log(current(state));
      state.items.length = 0;
      // this is also correct way , you can either state.items.length = 0 and return []
      // return { items:[] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
