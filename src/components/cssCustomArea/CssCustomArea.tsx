import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { CustomAreaButton } from './CustomAreaButton'
import { createNewCssStates, getElementUid } from '../pseudoArea/pseudoAreaSlice'

export const CssCustomArea = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState
    const dispatch = useAppDispatch()
    dispatch(
        createNewCssStates({
            elementName: selectedElementName,
            classNames: selectedElementClass,
        })
    )
    const displayWidth = cssStates[uid].customAreaDisplay.width
    const displayHeight = cssStates[uid].customAreaDisplay.height
    const displayColor = cssStates[uid].customAreaDisplay.color
    const displayBackgroundColor = cssStates[uid].customAreaDisplay.backgroundColor
    const displayPadding = cssStates[uid].customAreaDisplay.padding
    const displayFontSize = cssStates[uid].customAreaDisplay.fontSize
    const displayBorderColor = cssStates[uid].customAreaDisplay.borderColor
    const displayBorderStyle = cssStates[uid].customAreaDisplay.borderStyle
    const displayBorderWidth = cssStates[uid].customAreaDisplay.borderWidth
    const displayBorderRadius = cssStates[uid].customAreaDisplay.borderRadius
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
            <CustomAreaButton text="width" isDisplay={displayWidth} />
            <CustomAreaButton text="height" isDisplay={displayHeight} />
            <CustomAreaButton text="color" isDisplay={displayColor} />
            <CustomAreaButton text="backgroundColor" isDisplay={displayBackgroundColor} />
            <CustomAreaButton text="fontSize" isDisplay={displayFontSize} />
            <CustomAreaButton text="padding" isDisplay={displayPadding} />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#c3d825'}
                fontSize={'2rem'}
            >
                Border
            </Text>
            <CustomAreaButton text="borderColor" isDisplay={displayBorderColor} />
            <CustomAreaButton text="borderStyle" isDisplay={displayBorderStyle} />
            <CustomAreaButton text="borderWidth" isDisplay={displayBorderWidth} />
            <CustomAreaButton text="borderRadius" isDisplay={displayBorderRadius} />
        </Flex>
    )
}
