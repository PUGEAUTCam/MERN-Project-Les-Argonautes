import { createSlice } from "@reduxjs/toolkit";

//Initialize the state value
const initialState = {
    members: null,
}

export const membersSlice = createSlice({
    name: "membersStore",

    initialState,

    reducers: {
        setMember: (state, action) => {
            state.members = action.payload;
        },
        addMember: (state, action) => {
            state.members = [...state.members, action.payload]
        }
    }
});

export const { setMember, addMember } = membersSlice.actions;
export default membersSlice.reducer;