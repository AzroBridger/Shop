import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [], 
        auth: false,
    }, reducers: {
        setUser(state, action) {
            state.user = action.payload
        }, 
        setAuth(state, action) {
            state.auth = action.payload
        }
    }, 
})

export const {setUser, setAuth} = userSlice.actions;

export default userSlice.reducer;