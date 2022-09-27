import { Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { CustomAreaButton } from './CustomAreaButton'
import {
    getAllDisplayStatus,
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
import { saveCurrentCustomAreaDisplay, setPseudoButtonLIfeCycle } from '../pseudoArea/pseudoAreaSlice'

export const CssCustomArea = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const pseudoButtonLifeCycle = useAppSelector((state) => state.pseudoArea.pseudoButtonLifeCycle)
    const allDisplayStatus = useAppSelector((state) => getAllDisplayStatus(state)) //現在のclass areaすべての表示状態
    const isFirstRender = useRef(true)
    const cssState = useAppSelector((state) => state.pseudoArea.cssStates)
    const dispatch = useAppDispatch()
    useEffect(() => {
        // いらないのでは？
        // if (isFirstRender.current) {
        //     isFirstRender.current = false
        //     return
        // }
        if (pseudoButtonLifeCycle.isPushed === false) {
            return
        }
        console.log('save current custom area display')
        dispatch(
            saveCurrentCustomAreaDisplay({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                allCustomAreaDisplayStatus: { ...allDisplayStatus },
            })
        )
        dispatch(setPseudoButtonLIfeCycle({ timing: 'pushed', lifeCycle: false }))
        dispatch(setPseudoButtonLIfeCycle({ timing: 'savedDisplayStatus', lifeCycle: true }))
    }, [pseudoButtonLifeCycle])
    useEffect(() => {
        // displayロード
        if (pseudoButtonLifeCycle.isSavedCssProps === false) {
            return
        }
        console.log('load display')
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
        dispatch(setPseudoButtonLIfeCycle({ timing: 'savedCssProps', lifeCycle: false }))
        dispatch(setPseudoButtonLIfeCycle({ timing: 'loadedDisplayStatus', lifeCycle: true }))
    }, [pseudoButtonLifeCycle])
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
