import { createSlice } from "@reduxjs/toolkit";



const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] };
const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const item = action.payload

            const existItem = state.cartItems.find((x) => x._id === item._id)
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item]
            }


            // calculate Item price

            state.ItemPrice = addDecimals(state.cartItems.reduce((previousValue, item) => previousValue + item.price * item.qty, 0))

            // calculate delivery

            state.ItemDelivery = addDecimals(state.item.price > 100 ? 0 : 3)

            // calculate tax 

            // calcualte total price

            state.totalPrice = (
                Number(state.ItemPrice) +
                Number(state.ItemDelivery)
            ).toFixed(2)

            localStorage.setItem('cart', JSON.stringify(state))
        },
    },
});

export const addToCart = cartSlice.actions;
export default cartSlice.reducer;