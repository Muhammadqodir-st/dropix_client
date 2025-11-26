import { UserProp } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    data: UserProp | null
}

const initialState: UserState = {
    data: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserProp>) => {
            state.data = action.payload
        },
        logOut: (state) => {
            state.data = null
        }
    }
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;