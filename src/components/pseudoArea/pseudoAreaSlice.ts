import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'
import { cssTypes } from '../../types/cssTypes'
import { buttonInitialState } from '../buttonView/buttonViewSlice'
import { cssCustomAreaDisplay, cssCustomAreaType } from '../cssCustomArea/cssCustomAreaSlice'

type statesType = {
    element: {
        elementName: string
        classNames: string[]
        cssProps: cssTypes
        customAreaDisplay: cssCustomAreaType
    }
}

type arrayType = {
    [prop: string]: statesType
}

type setCssArgsType = {
    elementName: string
    classNames: string[]
    cssProps: cssTypes
}

const initCssState: statesType = {
    element: {
        // main, before, after, etc
        elementName: 'main',
        // hover, focus, active, etc(こっちは複合する可能性あり['hover', 'focus']みたいな感じ)
        classNames: [],
        // css property
        cssProps: buttonInitialState,
        // custom areaの状態
        customAreaDisplay: cssCustomAreaDisplay
        // edit areaの状態
    },
}

const initCssStates: arrayType = {
    main: initCssState,
}

type pseudoAreaType = {
    elementNameSelectedCurrent: string
    elementClassSelectedCurrent: string[]
    cssStates: arrayType
    isActiveMain: boolean
    isActiveBefore: boolean
    isActiveAfter: boolean
    isActiveHover: boolean
    isActiveFocus: boolean
    isActiveActive: boolean
}

const initialState: pseudoAreaType = {
    elementNameSelectedCurrent: 'main',
    elementClassSelectedCurrent: [],
    cssStates: initCssStates,
    isActiveMain: true,
    isActiveBefore: false,
    isActiveAfter: false,
    isActiveHover: false,
    isActiveFocus: false,
    isActiveActive: false,
}

export const pseudoAreaSlice = createSlice({
    name: 'pseudoArea',
    initialState,
    reducers: {
        setElementNameSelectedCurrent: (state, action: PayloadAction<string>) => {
            state.elementNameSelectedCurrent = action.payload
        },
        setElementClassSelectedCurrent: (state, action: PayloadAction<string>) => {
            if (action.payload in state.elementClassSelectedCurrent) {
                return
            } else {
                state.elementClassSelectedCurrent = [...state.elementClassSelectedCurrent, action.payload]
            }
        },
        removeElementClassSelectedCurrent: (state, action: PayloadAction<string>) => {
            if (current(state.elementClassSelectedCurrent).includes(action.payload)) {
                const newArray = state.elementClassSelectedCurrent.filter((elementClass) => {
                    return action.payload !== elementClass
                })
                state.elementClassSelectedCurrent = [...newArray]
            }
        },
        setCssStates: (state, action: PayloadAction<setCssArgsType>) => {
            // 既に同じ物が存在するか確認する
            const elementName = action.payload.elementName
            const classNames = action.payload.classNames
            const cssProps = action.payload.cssProps
            // console.log(elementName)
            // console.log(classNames)
            // console.log(cssProps)
            const uid =
                elementName +
                '_' +
                classNames.map((className) => {
                    return className
                })
            let cssState
            if (uid in state.cssStates) {
                cssState = state.cssStates.uid
            } else {
                cssState = initCssState
            }
            const newCssState = {
                ...cssState,
                elementName: elementName,
                classNames: classNames,
                cssProps: cssProps,
            }
            state.cssStates[uid] = newCssState
        },
        setIsActiveMain: (state, action: PayloadAction<boolean>) => {
            if (state.isActiveMain === true) {
                return
            } else {
                state.isActiveMain = action.payload
                state.isActiveBefore = false
                state.isActiveAfter = false
            }
        },
        setIsActiveBefore: (state, action: PayloadAction<boolean>) => {
            if (state.isActiveBefore === true) {
                return
            } else {
                state.isActiveBefore = action.payload
                state.isActiveMain = false
                state.isActiveAfter = false
            }
        },
        setIsActiveAfter: (state, action: PayloadAction<boolean>) => {
            if (state.isActiveAfter === true) {
                return
            } else {
                state.isActiveAfter = action.payload
                state.isActiveMain = false
                state.isActiveBefore = false
            }
        },
        setIsActiveHover: (state, action: PayloadAction<boolean>) => {
            state.isActiveHover = action.payload
        },
        setIsActiveFocus: (state, action: PayloadAction<boolean>) => {
            state.isActiveFocus = action.payload
        },
        setIsActiveActive: (state, action: PayloadAction<boolean>) => {
            state.isActiveActive = action.payload
        },
    },
})

export const {
    setElementNameSelectedCurrent,
    setElementClassSelectedCurrent,
    removeElementClassSelectedCurrent,
    setCssStates,
    setIsActiveMain,
    setIsActiveBefore,
    setIsActiveAfter,
    setIsActiveHover,
    setIsActiveFocus,
    setIsActiveActive,
} = pseudoAreaSlice.actions

export const selectElementNameSelectedCurrent = (state: getStateType) => state.pseudoArea.elementNameSelectedCurrent
export const selectElementClassSelectedCurrent = (state: getStateType) => state.pseudoArea.elementClassSelectedCurrent
export const cssStates = (state: getStateType) => state.pseudoArea.cssStates
export const isActiveMain = (state: getStateType) => state.pseudoArea.isActiveMain
export const isActiveBefore = (state: getStateType) => state.pseudoArea.isActiveBefore
export const isActiveAfter = (state: getStateType) => state.pseudoArea.isActiveAfter
export const isActiveHover = (state: getStateType) => state.pseudoArea.isActiveHover
export const isActiveFocus = (state: getStateType) => state.pseudoArea.isActiveFocus
export const isActiveActive = (state: getStateType) => state.pseudoArea.isActiveActive

export default pseudoAreaSlice.reducer
