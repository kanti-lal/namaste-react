import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Persist config for cart
const persistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const appStore = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(appStore);

export default appStore;
