import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

type cssCustomAreaType = {
    isOpen: boolean
}

const initialState: cssCustomAreaType = {
    isOpen: false,
}

export const cssCustomAnimeAreaSlice = createSlice({
    name: 'cssCustomAnimeArea',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
    },
})

export const { setIsOpen } = cssCustomAnimeAreaSlice.actions

export default cssCustomAnimeAreaSlice.reducer
