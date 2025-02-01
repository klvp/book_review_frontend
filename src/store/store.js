import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from './reviewSlice'
import bookSlice from './booksSlice'
import userSlice from './userSlice'
const store = configureStore({
    reducer: {
        reviews: reviewSlice,
        books: bookSlice,
        user: userSlice
    }
})

export default store