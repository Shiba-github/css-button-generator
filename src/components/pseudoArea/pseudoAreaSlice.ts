import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'
import { cssTypes } from '../../types/cssTypes'
import { buttonInitialState } from '../buttonView/buttonViewSlice'
import { cssCustomAreaDisplay, cssCustomAreaType } from '../cssCustomArea/cssCustomAreaSlice'

type arrayType = {
    [prop: string]: statesType
}

type statesType = {
    elementName: string
    classNames: string[]
    cssProps: cssTypes
    customAreaDisplay: cssCustomAreaType
    cssCodes: {
        [prop: string]: string
    }
}

const initCustomAreaDisplay = { ...cssCustomAreaDisplay }
const initCssProps = { ...buttonInitialState }
const initCssState: statesType = {
    elementName: 'Main', // main, before, after, etc
    classNames: [], // hover, focus, active, etc...(CSSの仕組み上、複合する可能性あり['hover', 'focus']みたいな感じ)
    cssProps: initCssProps,
    customAreaDisplay: initCustomAreaDisplay,
    cssCodes: {}, // {width: '100px', height: '100px' ...}
}

const initCssStates: arrayType = {
    Main_: initCssState,
}

type pseudoAreaType = {
    elementNameSelectedCurrent: string
    elementClassSelectedCurrent: string[]
    cssStates: arrayType
    pseudoButtonLifeCycle: {
        isPushed: boolean
        isSavedDisplayStatus: boolean
        isSavedCssProps: boolean
        isLoadedDisplayStatus: boolean
    }
    isActiveMain: boolean
    isActiveBefore: boolean
    isActiveAfter: boolean
    isActiveHover: boolean
    isActiveFocus: boolean
    isActiveActive: boolean
}

const initialState: pseudoAreaType = {
    elementNameSelectedCurrent: 'Main',
    elementClassSelectedCurrent: [],
    cssStates: initCssStates,
    pseudoButtonLifeCycle: {
        isPushed: false,
        isSavedDisplayStatus: false,
        isSavedCssProps: false,
        isLoadedDisplayStatus: false,
    },
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
        createNewCssStates: (
            state,
            action: PayloadAction<{
                elementName: string
                classNames: string[]
            }>
        ) => {
            const elementName = action.payload.elementName
            const classNames = action.payload.classNames
            const cssProps = initCssState.cssProps
            const customAreaDisplay = initCssState.customAreaDisplay
            /**
             * このuidで利用しているpseudoClass(or element)を判別する
             * 例えば、pseudoElementがbeforeで、pseudoClassがhover, focusの場合、"before_hover,focus"となる
             */
            const uid =
                elementName +
                '_' +
                classNames.map((className) => {
                    return className
                })
            let cssState
            if (uid in state.cssStates) {
                // すでに存在する場合は、何もしない。
                // TODO:が、この処理は使うところで書いて、ここではエラーを吐くようにしたほうがイイのかもしれない
                return
            } else {
                cssState = initCssState
            }
            const newCssState = {
                ...cssState,
                elementName: elementName,
                classNames: classNames,
                cssProps: cssProps,
                customAreaDisplay: customAreaDisplay,
            }
            state.cssStates[uid] = newCssState
        },
        saveCurrentCustomAreaDisplay: (
            state,
            action: PayloadAction<{
                elementName: string
                classNames: string[]
                allCustomAreaDisplayStatus: cssCustomAreaType
            }>
        ) => {
            const elementName = action.payload.elementName
            const classNames = action.payload.classNames
            const allCustomAreaDisplayStatus = action.payload.allCustomAreaDisplayStatus

            // TODO:処理が似ているので、関数化したい
            const uid =
                elementName +
                '_' +
                classNames.map((className) => {
                    return className
                })
            const cssState = current(state.cssStates)[uid]
            const newCssState = {
                ...cssState,
                elementName: elementName,
                classNames: classNames,
                customAreaDisplay: allCustomAreaDisplayStatus,
            }
            state.cssStates[uid] = newCssState
        },
        saveCurrentCssProps: (
            state,
            action: PayloadAction<{
                elementName: string
                classNames: string[]
                allCssProps: cssTypes
            }>
        ) => {
            const elementName = action.payload.elementName
            const classNames = action.payload.classNames
            const allCssProps = action.payload.allCssProps

            // TODO:処理が似ているので、関数化したい
            const uid =
                elementName +
                '_' +
                classNames.map((className) => {
                    return className
                })
            const cssState = current(state.cssStates)[uid]
            const newCssState = {
                ...cssState,
                elementName: elementName,
                classNames: classNames,
                cssProps: allCssProps,
            }
            state.cssStates[uid] = newCssState
        },
        saveCurrentCssCodes: (
            state,
            action: PayloadAction<{
                elementName: string
                classNames: string[]
                cssProp: string
                cssValue: string
            }>
        ) => {
            const elementName = action.payload.elementName
            const classNames = action.payload.classNames
            const cssProp = action.payload.cssProp
            const cssValue = action.payload.cssValue

            const uid = getElementUid(elementName, classNames)
            const cssState = current(state.cssStates)[uid]
            const newCssState = {
                ...cssState,
                cssCodes: {
                    ...cssState.cssCodes,
                    [cssProp]: cssValue,
                },
            }
            state.cssStates[uid] = newCssState
        },
        removeCurrentCssCodes: (
            state,
            action: PayloadAction<{
                elementName: string
                classNames: string[]
                cssProp: string
            }>
        ) => {
            const elementName = action.payload.elementName
            const classNames = action.payload.classNames
            const cssProp = action.payload.cssProp

            const uid = getElementUid(elementName, classNames)
            const cssState = current(state.cssStates)[uid]
            const newCssCodes = {
                ...cssState.cssCodes,
            }
            delete newCssCodes[cssProp]
            const newCssState = {
                ...cssState,
                cssCodes: newCssCodes,
            }
            state.cssStates[uid] = newCssState
        },
        setPseudoButtonLIfeCycle: (
            state,
            action: PayloadAction<{
                timing: 'pushed' | 'savedDisplayStatus' | 'savedCssProps' | 'loadedDisplayStatus'
                lifeCycle: boolean
            }>
        ) => {
            if (action.payload.timing === 'pushed') {
                state.pseudoButtonLifeCycle = {
                    ...current(state.pseudoButtonLifeCycle),
                    isPushed: action.payload.lifeCycle,
                }
            } else if (action.payload.timing === 'savedDisplayStatus') {
                state.pseudoButtonLifeCycle = {
                    ...current(state.pseudoButtonLifeCycle),
                    isSavedDisplayStatus: action.payload.lifeCycle,
                }
            } else if (action.payload.timing === 'savedCssProps') {
                state.pseudoButtonLifeCycle = {
                    ...current(state.pseudoButtonLifeCycle),
                    isSavedCssProps: action.payload.lifeCycle,
                }
            } else if (action.payload.timing === 'loadedDisplayStatus') {
                state.pseudoButtonLifeCycle = {
                    ...current(state.pseudoButtonLifeCycle),
                    isLoadedDisplayStatus: action.payload.lifeCycle,
                }
            }
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
    createNewCssStates,
    saveCurrentCustomAreaDisplay,
    saveCurrentCssProps,
    saveCurrentCssCodes,
    removeCurrentCssCodes,
    setPseudoButtonLIfeCycle,
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
export const pseudoButtonLifeCycle = (state: getStateType) => state.pseudoArea.pseudoButtonLifeCycle
export const isActiveMain = (state: getStateType) => state.pseudoArea.isActiveMain
export const isActiveBefore = (state: getStateType) => state.pseudoArea.isActiveBefore
export const isActiveAfter = (state: getStateType) => state.pseudoArea.isActiveAfter
export const isActiveHover = (state: getStateType) => state.pseudoArea.isActiveHover
export const isActiveFocus = (state: getStateType) => state.pseudoArea.isActiveFocus
export const isActiveActive = (state: getStateType) => state.pseudoArea.isActiveActive

export const getElementUid = (selectedElementName: string, selectedElementClass: string[]) => {
    const uid =
        selectedElementName +
        '_' +
        selectedElementClass.map((className) => {
            return className
        })
    return uid
}

export default pseudoAreaSlice.reducer
