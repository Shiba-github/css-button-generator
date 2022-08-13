import { configureStore } from '@reduxjs/toolkit'
import buttonViewSlice from './components/buttonView/buttonViewSlice'
import cssCustomAnimeAreaSlice from './components/cssCustomAnimeArea/cssCustomAnimeAreaSlice'
import cssCustomAreaSlice from './components/cssCustomArea/cssCustomAreaSlice'
import counterReducer from './redux_test/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        buttonView: buttonViewSlice,
        cssCustomArea: cssCustomAreaSlice,
        cssCustomAnimeArea: cssCustomAnimeAreaSlice,
    },
})

export type getStateType = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
