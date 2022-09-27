import { Button } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { memo, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getAllCssProps, setBackgroundColor, setBorder, setBorderColor, setBorderRadius, setBorderStyle, setBorderWidth, setColor, setDisplay, setFontSize, setHeight, setPadding, setTextDecoration, setWidth } from '../buttonView/buttonViewSlice'
import { getAllDisplayStatus, setDisplayBackgroundColor, setDisplayBorderColor, setDisplayBorderRadius, setDisplayBorderStyle, setDisplayBorderWidth, setDisplayColor, setDisplayFontSize, setDisplayHeight, setDisplayPadding, setDisplayWidth } from '../cssCustomArea/cssCustomAreaSlice'
import {
    removeElementClassSelectedCurrent,
    createNewCssStates,
    setElementClassSelectedCurrent,
    setElementNameSelectedCurrent,
    setPseudoButtonLIfeCycle,
    saveCurrentCustomAreaDisplay,
    saveCurrentCssProps,
} from './pseudoAreaSlice'

type propsType = {
    type: 'pseudoElements' | 'pseudoClass'
    TitleText: string
    setter: ActionCreatorWithPayload<boolean>
    isActive: boolean
}

export const PseudoButton = memo((props: propsType) => {
    const isFirstRender = useRef(true)
    const dispatch = useAppDispatch()
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const pseudoButtonLifeCycle = useAppSelector((state) => state.pseudoArea.pseudoButtonLifeCycle) //現在のpseudoButtonのライフサイクル
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState
    const allDisplayStatus = useAppSelector((state) => getAllDisplayStatus(state))
    const allCssProps = useAppSelector((state) => getAllCssProps(state))
    // console.log(cssStates)
    // useEffect(() => {
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false
    //         return
    //     }
    //     console.log('create new css states')
    //     dispatch(
    //         createNewCssStates({
    //             elementName: selectedElementName,
    //             classNames: selectedElementClass,
    //         })
    //     )
    //     dispatch(setPseudoButtonLIfeCycle({timing: 'pushed', lifeCycle: true}))
    // }, [props.isActive])
    // useEffect(() => {
    //     if (pseudoButtonLifeCycle.isSavedCssProps === false) {
    //         return
    //     }
    //     if (props.isActive === false) {
    //         return
    //     }
    //     console.log(props.TitleText)
    //     // ここが6回読みだされている
    //     console.log('set element name & class')
    //     if (props.type === 'pseudoElements') {
    //         console.log('ここ　きてる？')
    //         dispatch(setElementNameSelectedCurrent(props.TitleText))
    //     } else if (props.type === 'pseudoClass') {
    //         if (!props.isActive) {
    //             dispatch(setElementClassSelectedCurrent(props.TitleText))
    //         } else {
    //             dispatch(removeElementClassSelectedCurrent(props.TitleText))
    //         }
    //     }
    // }, [pseudoButtonLifeCycle, props.isActive])

    // useEffect(() => {
    //     console.log('create new css states')
    //     console.log(selectedElementName)
    //     console.log(selectedElementClass)
    //     dispatch(
    //         createNewCssStates({
    //             elementName: selectedElementName,
    //             classNames: selectedElementClass,
    //         })
    //     )
    // }, [selectedElementName, selectedElementClass])
    // const onClickButtonHandler = () => {
    //     dispatch(props.setter(!props.isActive))
    //     dispatch(setPseudoButtonLIfeCycle({timing: 'pushed', lifeCycle: true}))
    // }

    const onClickButton = () => {
    // buttonを切り替える
    dispatch(props.setter(!props.isActive))
    console.log(props.TitleText)
    console.log(props.isActive)
    
    // 現在のdisplayを保存する
    dispatch(
        saveCurrentCustomAreaDisplay({
            elementName: selectedElementName,
            classNames: selectedElementClass,
            allCustomAreaDisplayStatus: { ...allDisplayStatus },
        })
    )

    // 現在のcssStateを保存する
    dispatch(saveCurrentCssProps({elementName:selectedElementName, classNames:selectedElementClass, allCssProps}))

    // 新しい選択先の selectedElementName, selectedElementClassを保存する
    if (props.type === 'pseudoElements') {
        dispatch(setElementNameSelectedCurrent(props.TitleText))
    } else if (props.type === 'pseudoClass') {
        if (!props.isActive) {
            dispatch(setElementClassSelectedCurrent(props.TitleText))
        } else {
            dispatch(removeElementClassSelectedCurrent(props.TitleText))
        }
    }
    console.log(selectedElementName)
    console.log(selectedElementClass)
    // 新たなcssStateを作成する
    dispatch(
        createNewCssStates({
            elementName: selectedElementName,
            classNames: selectedElementClass,
        })
    )

    // 新しい選択先のdisplayをロードする
    
    const uid =
            selectedElementName +
            '_' +
            selectedElementClass.map((className) => {
                return className
            })
            console.log(uid)
        // TODO:将来的に長くなりそうなので、そのうちどっかに書き出したい
        dispatch(setDisplayBackgroundColor(cssStates[uid].customAreaDisplay.displayBackgroundColor))
        dispatch(setDisplayBorderColor(cssStates[uid].customAreaDisplay.displayBorderColor))
        dispatch(setDisplayBorderRadius(cssStates[uid].customAreaDisplay.displayBorderRadius))
        dispatch(setDisplayBorderStyle(cssStates[uid].customAreaDisplay.displayBorderStyle))
        dispatch(setDisplayBorderWidth(cssStates[uid].customAreaDisplay.displayBorderWidth))
        dispatch(setDisplayColor(cssStates[uid].customAreaDisplay.displayColor))
        dispatch(setDisplayFontSize(cssStates[uid].customAreaDisplay.displayFontSize))
        dispatch(setDisplayHeight(cssStates[uid].customAreaDisplay.displayHeight))
        dispatch(setDisplayPadding(cssStates[uid].customAreaDisplay.displayPadding))
        dispatch(setDisplayWidth(cssStates[uid].customAreaDisplay.displayWidth))

    // 新しい選択先のcssStateをロードする
        dispatch(setColor(cssStates[uid].cssProps.color))
        dispatch(setBackgroundColor(cssStates[uid].cssProps.backgroundColor))
        dispatch(setBorder(cssStates[uid].cssProps.border))
        dispatch(setPadding(cssStates[uid].cssProps.padding))
        dispatch(setTextDecoration(cssStates[uid].cssProps.textDecoration))
        dispatch(setDisplay(cssStates[uid].cssProps.display))
        dispatch(setFontSize(cssStates[uid].cssProps.fontSize))
        dispatch(setBorderColor(cssStates[uid].cssProps.borderColor))
        dispatch(setBorderRadius(cssStates[uid].cssProps.borderRadius))
        dispatch(setBorderStyle(cssStates[uid].cssProps.borderStyle))
        dispatch(setBorderWidth(cssStates[uid].cssProps.borderWidth))
        dispatch(setWidth(cssStates[uid].cssProps.width))
        dispatch(setHeight(cssStates[uid].cssProps.height))
    }
    return (
        <>
            <Button
                // onClick={onClickButtonHandler}
                onClick={onClickButton}
                boxShadow={'none !important'}
                backgroundColor={props.isActive ? 'blue.500' : 'rgb(44 49 61)'}
                _hover={{ backgroundColor: props.isActive ? 'blue.400' : 'rgb(63 68 78)' }}
            >
                {props.TitleText}
            </Button>
        </>
    )
})
