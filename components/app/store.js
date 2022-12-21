import { configureStore } from '@reduxjs/toolkit'
import MoviesId from '../features/MoviesId'

export const store = configureStore({
 reducer: {
    _MOBIES_ID_: MoviesId,

 }
})
