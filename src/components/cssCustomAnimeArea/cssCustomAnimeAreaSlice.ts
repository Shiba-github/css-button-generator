import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

type cssCustomAnimeAreaType = {
    isSelectedAnimeTopic: boolean
    displayAnimeWidth: boolean
    displayAnimeHeight: boolean
    displayAnimePadding: boolean
    displayAnimeFontSize: boolean
    displayAnimeBorderColor: boolean
    displayAnimeBorderStyle: boolean
    displayAnimeBorderWidth: boolean
    displayAnimeBorderRadius: boolean
    displayAnimeColor: boolean
    displayAnimeBackgroundColor: boolean
}

const initialState: cssCustomAnimeAreaType = {
    isSelectedAnimeTopic: false,
    displayAnimeWidth: false,
    displayAnimeHeight: false,
    displayAnimePadding: false,
    displayAnimeFontSize: false,
    displayAnimeBorderColor: false,
    displayAnimeBorderStyle: false,
    displayAnimeBorderWidth: false,
    displayAnimeBorderRadius: false,
    displayAnimeColor: false,
    displayAnimeBackgroundColor: false,
}

export const cssCustomAnimeAreaSlice = createSlice({
    name: 'cssCustomAnimeArea',
    initialState,
    reducers: {
        setIsSelectedAnimeTopic: (state, action: PayloadAction<boolean>) => {
            state.isSelectedAnimeTopic = action.payload
        },
        setDisplayAnimeWidth: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeWidth = action.payload
        },
        setDisplayAnimePadding: (state, action: PayloadAction<boolean>) => {
            state.displayAnimePadding = action.payload
        },
        setDisplayAnimeHeight: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeHeight = action.payload
        },
        setDisplayAnimeFontSize: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeFontSize = action.payload
        },
        setDisplayAnimeBorderColor: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeBorderColor = action.payload
        },
        setDisplayAnimeBorderStyle: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeBorderStyle = action.payload
        },
        setDisplayAnimeBorderWidth: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeBorderWidth = action.payload
        },
        setDisplayAnimeBorderRadius: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeBorderRadius = action.payload
        },
        setDisplayAnimeColor: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeColor = action.payload
        },
        setDisplayAnimeBackgroundColor: (state, action: PayloadAction<boolean>) => {
            state.displayAnimeBackgroundColor = action.payload
        },
    },
})

export const {
    setIsSelectedAnimeTopic,
    setDisplayAnimeWidth,
    setDisplayAnimeHeight,
    setDisplayAnimePadding,
    setDisplayAnimeFontSize,
    setDisplayAnimeBorderColor,
    setDisplayAnimeBorderStyle,
    setDisplayAnimeBorderWidth,
    setDisplayAnimeBorderRadius,
    setDisplayAnimeColor,
    setDisplayAnimeBackgroundColor,
} = cssCustomAnimeAreaSlice.actions

export const isSelectedAnimeTopic = (state: getStateType) => state.cssCustomAnimeArea.isSelectedAnimeTopic
export const displayAnimeWidth = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeWidth
export const displayAnimeHeight = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeHeight
export const displayAnimePadding = (state: getStateType) => state.cssCustomAnimeArea.displayAnimePadding
export const displayAnimeFontSize = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeFontSize
export const displayAnimeBorderColor = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeBorderColor
export const displayAnimeBorderStyle = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeBorderStyle
export const displayAnimeBorderWidth = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeBorderWidth
export const displayAnimeBorderRadius = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeBorderRadius
export const displayAnimeColor = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeColor
export const displayAnimeBackgroundColor = (state: getStateType) => state.cssCustomAnimeArea.displayAnimeBackgroundColor

export default cssCustomAnimeAreaSlice.reducer
