// ✨ create your `store` in this module





import quotesReducer from './quotesSlice'

import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore ({
    reducer: {
        quotesState: quotesReducer,
    }
})