import { configureStore } from '@reduxjs/toolkit'
import cssCustomAnimeAreaSlice from './components/cssCustomAnimeArea/cssCustomAnimeAreaSlice'
import pseudoAreaSlice from './components/pseudoArea/pseudoAreaSlice'
import counterReducer from './redux_test/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cssCustomAnimeArea: cssCustomAnimeAreaSlice,
        pseudoArea: pseudoAreaSlice,
    },
})

export type getStateType = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
