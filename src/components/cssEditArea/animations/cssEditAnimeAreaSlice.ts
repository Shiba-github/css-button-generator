import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../../store'
import { cssTypes } from '../../../types/cssTypes'
import { fontSize } from '../../buttonView/buttonViewSlice'


// percentのやつも連想配列にぶち込んでおいたほうがいいかも
// 現状editWidthとかで一括操作するときに連想配列のほうが都合がイイ可能性大
type cssEditAnimeAreaType = {
    cssPropertyAt0Percent: cssTypes
    is0PercentPanelSelected: boolean
    is10PercentPanelSelected: boolean
    is20PercentPanelSelected: boolean
    is30PercentPanelSelected: boolean
    is40PercentPanelSelected: boolean
    is50PercentPanelSelected: boolean
    is60PercentPanelSelected: boolean
    is70PercentPanelSelected: boolean
    is80PercentPanelSelected: boolean
    is90PercentPanelSelected: boolean
    is100PercentPanelSelected: boolean
}

const initCssProperty = {
    color: 'rgba(255,0,0,1)',
    backgroundColor: 'rgba(0,0,255,1)',
    border: 'none',
    padding: '0px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '30px',
    borderColor: 'none',
    borderStyle: 'none',
    borderWidth: '0px',
    borderRadius: '0px',
    width: '150px',
    height: '75x',
}

const initialState: cssEditAnimeAreaType = {
    cssPropertyAt0Percent: initCssProperty,
    is0PercentPanelSelected: true,
    is10PercentPanelSelected: false,
    is20PercentPanelSelected: false,
    is30PercentPanelSelected: false,
    is40PercentPanelSelected: false,
    is50PercentPanelSelected: false,
    is60PercentPanelSelected: false,
    is70PercentPanelSelected: false,
    is80PercentPanelSelected: false,
    is90PercentPanelSelected: false,
    is100PercentPanelSelected: false,
}

export const cssEditAnimeAreaSlice = createSlice({
    name: 'cssEditAnimeArea',
    initialState,
    reducers: {
        setCssPropertyAt0Percent: (state, action: PayloadAction<cssTypes>) => {
            state.cssPropertyAt0Percent.fontSize = action.payload.fontSize
        },
        setIs0PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is0PercentPanelSelected = action.payload
        },
        setIs10PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is10PercentPanelSelected = action.payload
        },
        setIs20PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is20PercentPanelSelected = action.payload
        },
        setIs30PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is30PercentPanelSelected = action.payload
        },
        setIs40PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is40PercentPanelSelected = action.payload
        },
        setIs50PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is50PercentPanelSelected = action.payload
        },
        setIs60PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is60PercentPanelSelected = action.payload
        },
        setIs70PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is70PercentPanelSelected = action.payload
        },
        setIs80PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is80PercentPanelSelected = action.payload
        },
        setIs90PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is90PercentPanelSelected = action.payload
        },
        setIs100PercentPanelSelected: (state, action: PayloadAction<boolean>) => {
            state.is100PercentPanelSelected = action.payload
        },
    },
})

export const {
    setIs0PercentPanelSelected,
    setIs10PercentPanelSelected,
    setIs20PercentPanelSelected,
    setIs30PercentPanelSelected,
    setIs40PercentPanelSelected,
    setIs50PercentPanelSelected,
    setIs60PercentPanelSelected,
    setIs70PercentPanelSelected,
    setIs80PercentPanelSelected,
    setIs90PercentPanelSelected,
    setIs100PercentPanelSelected,
} = cssEditAnimeAreaSlice.actions

export const is0PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is0PercentPanelSelected
export const is10PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is10PercentPanelSelected
export const is20PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is20PercentPanelSelected
export const is30PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is30PercentPanelSelected
export const is40PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is40PercentPanelSelected
export const is50PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is50PercentPanelSelected
export const is60PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is60PercentPanelSelected
export const is70PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is70PercentPanelSelected
export const is80PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is80PercentPanelSelected
export const is90PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is90PercentPanelSelected
export const is100PercentPanelSelected = (state: getStateType) => state.cssEditAnimeArea.is100PercentPanelSelected

export default cssEditAnimeAreaSlice.reducer
