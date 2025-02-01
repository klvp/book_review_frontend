import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    status: "idle"
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // fetchBooks(state, action) {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "fulfilled"
            })
            .addCase(getBooks.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getBooks.rejected, (state, action) => {
                state.status = "error"
            })
    }
})
export const { fetchBooks } = booksSlice.actions
export default booksSlice.reducer

export const getBooks = createAsyncThunk("books/get", async () => {
    const response = await fetch(`http://localhost:3000/api/books`);
    let data = await response.json();
    return data.data
})

// export function getBooks() {
//     return async function getBooksThunk(dispatch, getState) {
//         const response = await fetch(`http://localhost:3000/api/books`);
//         let data = await response.json();
//         dispatch(fetchBooks(data?.data))
//     }
// }