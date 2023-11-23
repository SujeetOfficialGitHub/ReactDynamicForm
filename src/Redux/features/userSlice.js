import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    users: []
}
const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUser: (state, action) => {
            state.users = [...state.users]
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;