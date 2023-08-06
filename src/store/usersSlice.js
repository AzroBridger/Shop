import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user_id: null, 
    }, 
    reducers: {
        setUsers(state, action) {
            state.users = [...state.users, action.payload]
        },
        setID (state, action) {
            state.user_id = action.payload.id
        },
        setNames(state, action){
            const user = state.users.find(user => user.id === state.user_id)
            user.name = action.payload
        }, 
        setSurnames(state, action){
            const user = state.users.find(user => user.id === state.user_id)
            user.surname = action.payload
        }, 
        setCountries(state, action){
            const user = state.users.find(user => user.id === state.user_id)
            user.country = action.payload
        }, 
        setCities(state, action){
            const user = state.users.find(user => user.id === state.user_id)
            user.city = action.payload
        }, 
        setAdresses(state, action){
            const user = state.users.find(user => user.id === state.user_id)
            user.adress = action.payload
        }, 
        setPass (state, action) {
            const user = state.users.find(user => user.id === state.user_id)
            user.password = action.payload
        }, 
        addToOrders (state, action) {
            const user = state.users.find(user => user.id === state.user_id)
            let time_order = []
            time_order = action.payload
            user.orders = [...user.orders, time_order]

            
        }
    }, 
})

export const {setUsers, setID, setNames, setSurnames, setCountries, setCities, setAdresses, setPass, addToOrders} = usersSlice.actions;

export default usersSlice.reducer;