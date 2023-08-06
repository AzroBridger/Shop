import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: [], 
    }, reducers: {
        addToOrder(state, action) {
            let array = false
            state.order.forEach(el => {
            if(el.id === action.payload.id)
                {array = true}})
            if (array === false){
                state.order = [...state.order, action.payload]}
        }, 
        removeFromOrder(state, action) {
            state.order = (state.order.filter(el => el.id !== action.payload))
        }, 
        clearOrder(state) {
            state.order = []
        }
    }, 
})

export const {addToOrder, removeFromOrder, clearOrder} = orderSlice.actions;

export default orderSlice.reducer;