import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import usersSlice from './usersSlice';
import orderSlice from './orderSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        users: usersSlice, 
        order: orderSlice, 
    }
});