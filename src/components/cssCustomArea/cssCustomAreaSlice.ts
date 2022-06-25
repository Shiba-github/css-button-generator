import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

type cssCustomAreaType = {
    isOpen: boolean
    displayBorderColor: boolean
    displayBorderStyle: boolean
    displayBorderWidth: boolean
}

const initialState: cssCustomAreaType = {
    isOpen: false,
    displayBorderColor: false,
    displayBorderStyle: false,
    displayBorderWidth: false,
}

export const cssCustomAreaSlice = createSlice({
    name: 'cssCustomArea',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        setDisplayBorderColor: (state, action: PayloadAction<boolean>) => {
            state.displayBorderColor = action.payload
        },
        setDisplayBorderStyle: (state, action: PayloadAction<boolean>) => {
            state.displayBorderStyle = action.payload
        },
        setDisplayBorderWidth: (state, action: PayloadAction<boolean>) => {
            state.displayBorderWidth = action.payload
        },
    },
})

export const { setIsOpen, setDisplayBorderColor, setDisplayBorderStyle, setDisplayBorderWidth } =
    cssCustomAreaSlice.actions

export const isOpen = (state: getStateType) => state.cssCustomArea.isOpen
export const displayBorderColor = (state: getStateType) => state.cssCustomArea.displayBorderColor
export const displayBorderStyle = (state: getStateType) => state.cssCustomArea.displayBorderStyle
export const displayBorderWidth = (state: getStateType) => state.cssCustomArea.displayBorderWidth

export default cssCustomAreaSlice.reducer
