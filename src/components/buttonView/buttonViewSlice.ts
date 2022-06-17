import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'

type buttonViewType = {
    color: string
    backgroundColor: string
    border: string
    padding: string
    textDecoration: string
    display: string
    fontSize: string
}

const initialState: buttonViewType = {
    color: 'rgba(255,0,0,1)',
    backgroundColor: '#4CAF50',
    border: 'none',
    padding: '15px 32px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
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
            state.color = action.payload
        },
        setPadding: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setTextDecoration: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setDisplay: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setFontSize: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
    },
})

export const { setColor, setBackgroundColor, setBorder, setPadding, setTextDecoration, setDisplay, setFontSize } =
    buttonViewSlice.actions

export const color = (state: getStateType) => state.buttonView.color
export const backgroundColor = (state: getStateType) => state.buttonView.backgroundColor
export const border = (state: getStateType) => state.buttonView.border
export const padding = (state: getStateType) => state.buttonView.padding
export const textDecoration = (state: getStateType) => state.buttonView.textDecoration
export const display = (state: getStateType) => state.buttonView.display

export default buttonViewSlice.reducer
