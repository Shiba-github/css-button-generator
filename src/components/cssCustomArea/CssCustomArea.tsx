import { Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { CustomAreaButton } from './CustomAreaButton'
import {
    setDisplayBackgroundColor,
    setDisplayBorderColor,
    setDisplayBorderRadius,
    setDisplayBorderStyle,
    setDisplayBorderWidth,
    setDisplayColor,
    setDisplayFontSize,
    setDisplayHeight,
    setDisplayPadding,
    setDisplayWidth,
} from './cssCustomAreaSlice'
import { setIsChangedPseudoButton } from '../pseudoArea/pseudoAreaSlice'

export const CssCustomArea = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const isChangedPseudoButton = useAppSelector((state) => state.pseudoArea.isChangedPseudoButton)
    const cssState = useAppSelector((state) => state.pseudoArea.cssStates)
    const dispatch = useAppDispatch()
    useEffect(() => {
        // pseudoAreaが変更されたときだけ初期化処理を行うようにisChangedPseudoButtonをトリガーにしている
        if (!isChangedPseudoButton) {
            return
        }
        const uid =
            selectedElementName +
            '_' +
            selectedElementClass.map((className) => {
                return className
            })
        // TODO:将来的に長くなりそうなので、そのうちどっかに書き出したい
        dispatch(setDisplayBackgroundColor(cssState[uid].customAreaDisplay.displayBackgroundColor))
        dispatch(setDisplayBorderColor(cssState[uid].customAreaDisplay.displayBorderColor))
        dispatch(setDisplayBorderRadius(cssState[uid].customAreaDisplay.displayBorderRadius))
        dispatch(setDisplayBorderStyle(cssState[uid].customAreaDisplay.displayBorderStyle))
        dispatch(setDisplayBorderWidth(cssState[uid].customAreaDisplay.displayBorderWidth))
        dispatch(setDisplayColor(cssState[uid].customAreaDisplay.displayColor))
        dispatch(setDisplayFontSize(cssState[uid].customAreaDisplay.displayFontSize))
        dispatch(setDisplayHeight(cssState[uid].customAreaDisplay.displayHeight))
        dispatch(setDisplayPadding(cssState[uid].customAreaDisplay.displayPadding))
        dispatch(setDisplayWidth(cssState[uid].customAreaDisplay.displayWidth))
        dispatch(setIsChangedPseudoButton(false))
    }, [isChangedPseudoButton])
    const displayWidth = useAppSelector((state) => state.cssCustomArea.displayWidth)
    const displayHeight = useAppSelector((state) => state.cssCustomArea.displayHeight)
    const displayColor = useAppSelector((state) => state.cssCustomArea.displayColor)
    const displayBackgroundColor = useAppSelector((state) => state.cssCustomArea.displayBackgroundColor)
    const displayPadding = useAppSelector((state) => state.cssCustomArea.displayPadding)
    const displayFontSize = useAppSelector((state) => state.cssCustomArea.displayFontSize)
    const displayBorderColor = useAppSelector((state) => state.cssCustomArea.displayBorderColor)
    const displayBorderStyle = useAppSelector((state) => state.cssCustomArea.displayBorderStyle)
    const displayBorderWidth = useAppSelector((state) => state.cssCustomArea.displayBorderWidth)
    const displayBorderRadius = useAppSelector((state) => state.cssCustomArea.displayBorderRadius)
    return (
        <Flex flexDirection={'column'} width={'15rem'} height={'90%'} flexWrap={'wrap'} minHeight={'0'}>
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#f5b199'}
                fontSize={'2rem'}
            >
                Basics
            </Text>
            <CustomAreaButton text="Width" isDisplay={displayWidth} setter={setDisplayWidth} />
            <CustomAreaButton text="Height" isDisplay={displayHeight} setter={setDisplayHeight} />
            <CustomAreaButton text="Color" isDisplay={displayColor} setter={setDisplayColor} />
            <CustomAreaButton
                text="BackgroundColor"
                isDisplay={displayBackgroundColor}
                setter={setDisplayBackgroundColor}
            />
            <CustomAreaButton text="FontSize" isDisplay={displayFontSize} setter={setDisplayFontSize} />
            <CustomAreaButton text="Padding" isDisplay={displayPadding} setter={setDisplayPadding} />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#c3d825'}
                fontSize={'2rem'}
            >
                Border
            </Text>
            <CustomAreaButton text="BorderColor" isDisplay={displayBorderColor} setter={setDisplayBorderColor} />
            <CustomAreaButton text="BorderStyle" isDisplay={displayBorderStyle} setter={setDisplayBorderStyle} />
            <CustomAreaButton text="BorderWidth" isDisplay={displayBorderWidth} setter={setDisplayBorderWidth} />
            <CustomAreaButton text="BorderRadius" isDisplay={displayBorderRadius} setter={setDisplayBorderRadius} />
        </Flex>
    )
}
