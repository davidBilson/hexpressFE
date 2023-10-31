import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const user = {
                id: nanoid(),
                text: action.payload,
            }
        }
    },

})