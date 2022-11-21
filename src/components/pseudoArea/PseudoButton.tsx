import { Button } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { memo, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
    setBackgroundColor,
    setBorder,
    setBorderColor,
    setBorderRadius,
    setBorderStyle,
    setBorderWidth,
    setColor,
    setDisplay,
    setFontSize,
    setHeight,
    setPadding,
    setTextDecoration,
    setWidth,
} from '../buttonView/buttonViewSlice'

import {
    removeElementClassSelectedCurrent,
    createNewCssStates,
    setElementClassSelectedCurrent,
    setElementNameSelectedCurrent,
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
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState

    const onClickButton = () => {
        // buttonを切り替える
        dispatch(props.setter(!props.isActive))

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
    }
    useEffect(() => {
        if (isFirstRender.current) {
            return
        }
        // 新たなcssStateを作成する
        dispatch(
            createNewCssStates({
                elementName: selectedElementName,
                classNames: selectedElementClass,
            })
        )
    }, [selectedElementName, selectedElementClass])
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        const uid =
            selectedElementName +
            '_' +
            selectedElementClass.map((className) => {
                return className
            })
        if (uid in cssStates === false) {
            return
        }

        // 新しい選択先のcssStateをロードする
        // TODO:コイツも将来的にpseudo sliceに統合してbutton sliceを削除する
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
    }, [cssStates])
    return (
        <>
            <Button
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
