import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlices";
import cartSLiceReducer from "./slices/cartSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSLiceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});


export default store;