import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

type cssCustomAreaType = {
    isOpen: boolean
    displayWidth: boolean
    displayHeight: boolean
    displayBorderColor: boolean
    displayBorderStyle: boolean
    displayBorderWidth: boolean
    displayBorderRadius: boolean
}

const initialState: cssCustomAreaType = {
    isOpen: false,
    displayWidth: false,
    displayHeight: false,
    displayBorderColor: false,
    displayBorderStyle: false,
    displayBorderWidth: true,
    displayBorderRadius: false,
}

export const cssCustomAreaSlice = createSlice({
    name: 'cssCustomArea',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        setDisplayWidth: (state, action: PayloadAction<boolean>) => {
            state.displayWidth = action.payload
        },
        setDisplayHeight: (state, action: PayloadAction<boolean>) => {
            state.displayHeight = action.payload
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
        setDisplayBorderRadius: (state, action: PayloadAction<boolean>) => {
            state.displayBorderRadius = action.payload
        },
    },
})

export const {
    setIsOpen,
    setDisplayWidth,
    setDisplayHeight,
    setDisplayBorderColor,
    setDisplayBorderStyle,
    setDisplayBorderWidth,
    setDisplayBorderRadius,
} = cssCustomAreaSlice.actions

export const isOpen = (state: getStateType) => state.cssCustomArea.isOpen
export const displayWidth = (state: getStateType) => state.cssCustomArea.displayWidth
export const displayHeight = (state: getStateType) => state.cssCustomArea.displayHeight
export const displayBorderColor = (state: getStateType) => state.cssCustomArea.displayBorderColor
export const displayBorderStyle = (state: getStateType) => state.cssCustomArea.displayBorderStyle
export const displayBorderWidth = (state: getStateType) => state.cssCustomArea.displayBorderWidth
export const displayBorderRadius = (state: getStateType) => state.cssCustomArea.displayBorderRadius

export default cssCustomAreaSlice.reducer
