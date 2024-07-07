export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};



export const UpdateCart = (state) => {
    // calculate Item price

    state.ItemPrice = addDecimals(state.cartItems.reduce((previousValue, item) => previousValue + item.price * item.qty, 0))

    // calculate delivery

    state.ItemDelivery = addDecimals(state.ItemPrice > 10 ? 3 : 0)

    // calculate tax 
    state.ItemTax = addDecimals(Number(state.ItemPrice > 15 ? state.ItemPrice * 0.01 : 0).toFixed(2));

    // calcualte total price

    state.totalPrice = (
        Number(state.ItemPrice) +
        Number(state.ItemDelivery) +
        Number(state.ItemTax)
    ).toFixed(2)

    localStorage.setItem('cart', JSON.stringify(state))
}