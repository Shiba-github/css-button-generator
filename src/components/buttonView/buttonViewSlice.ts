import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

// TODO:ぶくぶくになる未来が容易に想像できる(要リファクタリング
type buttonViewType = {
    color: string
    backgroundColor: string
    border: string
    padding: string
    textDecoration: string
    display: string
    fontSize: string
    borderColor: string
    borderStyle: string
    borderRadius: string
}

const initialState: buttonViewType = {
    color: 'rgba(255,0,0,1)',
    backgroundColor: '#4CAF50',
    border: 'none',
    padding: '0px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderColor: 'rgba(255,0,0,1)',
    borderStyle: 'none',
    borderRadius: '0px',
}

export const buttonViewSlice = createSlice({
    name: 'buttonView',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setBackgroundColor: (state, action: PayloadAction<string>) => {
            state.backgroundColor = action.payload
        },
        setBorder: (state, action: PayloadAction<string>) => {
            state.border = action.payload
        },
        setPadding: (state, action: PayloadAction<string>) => {
            state.padding = action.payload
        },
        setTextDecoration: (state, action: PayloadAction<string>) => {
            state.textDecoration = action.payload
        },
        setDisplay: (state, action: PayloadAction<string>) => {
            state.display = action.payload
        },
        setFontSize: (state, action: PayloadAction<string>) => {
            state.fontSize = action.payload
        },
        setBorderColor: (state, action: PayloadAction<string>) => {
            state.borderColor = action.payload
        },
        setBorderStyle: (state, action: PayloadAction<string>) => {
            state.borderStyle = action.payload
        },
        setBorderRadius: (state, action: PayloadAction<string>) => {
            state.borderRadius = action.payload
        },
    },
})

export const {
    setColor,
    setBackgroundColor,
    setBorder,
    setPadding,
    setTextDecoration,
    setDisplay,
    setFontSize,
    setBorderColor,
    setBorderStyle,
    setBorderRadius,
} = buttonViewSlice.actions

export const color = (state: getStateType) => state.buttonView.color
export const backgroundColor = (state: getStateType) => state.buttonView.backgroundColor
export const border = (state: getStateType) => state.buttonView.border
export const padding = (state: getStateType) => state.buttonView.padding
export const textDecoration = (state: getStateType) => state.buttonView.textDecoration
export const display = (state: getStateType) => state.buttonView.display
export const borderColor = (state: getStateType) => state.buttonView.borderColor
export const borderStyle = (state: getStateType) => state.buttonView.borderStyle
export const borderRadius = (state: getStateType) => state.buttonView.borderRadius

export default buttonViewSlice.reducer
