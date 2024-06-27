import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutatting the state here
            // Redux uses immer to mutate(BTS)
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log(state);
            console.log(current(state))
            // state = []; this will just create the local copy of the state but didnt mutate it.
            // for mutation to clear below code will work'
            state.items.length = 0;
            //  you can do the above or you can return the empty array
            // return {items : []};
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;