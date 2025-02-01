import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getCookie from "../utility/helper"

const initialState = {
    data: {},
    status: "idle"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "fulfilled"
            })
            .addCase(getUser.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = "error"
            })
    }
})
export const { } = userSlice.actions
export default userSlice.reducer

export const getUser = createAsyncThunk("user/get", async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/user",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": getCookie("token"),
                },
                credentials: "include"
            });
        let data = await response.json();
        return data.data
    } catch (error) {
        console.error("🚀 ~ getUser ~ error:", error)
    }

})