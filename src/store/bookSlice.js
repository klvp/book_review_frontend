import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: {},
    status: "idle",
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleBook.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "fulfilled"
            })
            .addCase(getSingleBook.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getSingleBook.rejected, (state, action) => {
                state.status = "error"
            })
    }
})
export const { } = booksSlice.actions
export default booksSlice.reducer

export const getSingleBook = createAsyncThunk("single_book/get", async (bookID) => {
    try {
        const response = await fetch(`http://localhost:3000/api/books/` + bookID);
        let data = await response.json();
        return data.data
    } catch (error) {
        console.log("🚀 ~ getSingleBook ~ error:", error)
    }
})
