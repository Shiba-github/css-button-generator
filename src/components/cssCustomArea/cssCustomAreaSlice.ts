import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

export type cssCustomAreaType = {
    displayWidth: boolean
    displayHeight: boolean
    displayPadding: boolean
    displayFontSize: boolean
    displayBorderColor: boolean
    displayBorderStyle: boolean
    displayBorderWidth: boolean
    displayBorderRadius: boolean
    displayColor: boolean
    displayBackgroundColor: boolean
}

export const cssCustomAreaDisplay: cssCustomAreaType = {
    displayWidth: false,
    displayHeight: false,
    displayPadding: false,
    displayFontSize: false,
    displayBorderColor: false,
    displayBorderStyle: false,
    displayBorderWidth: false,
    displayBorderRadius: false,
    displayColor: false,
    displayBackgroundColor: false,
}

export const cssCustomAreaSlice = createSlice({
    name: 'cssCustomArea',
    initialState: cssCustomAreaDisplay,
    reducers: {
        setDisplayWidth: (state, action: PayloadAction<boolean>) => {
            state.displayWidth = action.payload
        },
        setDisplayPadding: (state, action: PayloadAction<boolean>) => {
            state.displayPadding = action.payload
        },
        setDisplayHeight: (state, action: PayloadAction<boolean>) => {
            state.displayHeight = action.payload
        },
        setDisplayFontSize: (state, action: PayloadAction<boolean>) => {
            state.displayFontSize = action.payload
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
        setDisplayColor: (state, action: PayloadAction<boolean>) => {
            state.displayColor = action.payload
        },
        setDisplayBackgroundColor: (state, action: PayloadAction<boolean>) => {
            state.displayBackgroundColor = action.payload
        },
    },
})

export const {
    setDisplayWidth,
    setDisplayHeight,
    setDisplayPadding,
    setDisplayFontSize,
    setDisplayBorderColor,
    setDisplayBorderStyle,
    setDisplayBorderWidth,
    setDisplayBorderRadius,
    setDisplayColor,
    setDisplayBackgroundColor,
} = cssCustomAreaSlice.actions

export const displayWidth = (state: getStateType) => state.cssCustomArea.displayWidth
export const displayHeight = (state: getStateType) => state.cssCustomArea.displayHeight
export const displayPadding = (state: getStateType) => state.cssCustomArea.displayPadding
export const displayFontSize = (state: getStateType) => state.cssCustomArea.displayFontSize
export const displayBorderColor = (state: getStateType) => state.cssCustomArea.displayBorderColor
export const displayBorderStyle = (state: getStateType) => state.cssCustomArea.displayBorderStyle
export const displayBorderWidth = (state: getStateType) => state.cssCustomArea.displayBorderWidth
export const displayBorderRadius = (state: getStateType) => state.cssCustomArea.displayBorderRadius
export const displayColor = (state: getStateType) => state.cssCustomArea.displayColor
export const displayBackgroundColor = (state: getStateType) => state.cssCustomArea.displayBackgroundColor

export default cssCustomAreaSlice.reducer
