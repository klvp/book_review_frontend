import { configureStore } from "@reduxjs/toolkit";
import booksSlice from './booksListSlice'
import bookSlice from './bookSlice'
import userSlice from './userSlice'

const store = configureStore({
    reducer: {
        books: booksSlice,
        user: userSlice,
        book: bookSlice
    }
})

export default store