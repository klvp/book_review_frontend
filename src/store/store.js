import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from './reviewSlice'
import bookSlice from './booksListSlice'
import singleBookSlice from './bookSlice'
import userSlice from './userSlice'

const store = configureStore({
    reducer: {
        reviews: reviewSlice,
        books: bookSlice,
        user: userSlice,
        book: singleBookSlice
    }
})

export default store