import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },

        remove(state, action) {
            return state.filter(product => product._id !== action.payload)
        }
    }
})
export const { add, remove } = reviewSlice.actions
export default reviewSlice.reducer