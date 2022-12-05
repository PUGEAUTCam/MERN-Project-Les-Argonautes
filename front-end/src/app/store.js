import { configureStore } from '@reduxjs/toolkit';
import { membersSlice } from '../features/membersSlice';

export const store = configureStore({
    reducer: {
        membersStore: membersSlice.reducer,
    }
});